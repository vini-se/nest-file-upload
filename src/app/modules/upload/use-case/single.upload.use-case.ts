import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { MimeTypeToUploadTypeEnumMap } from 'src/domain/map/mimetype-to-enum.type.map';
import { SupabaseClientClass } from 'src/infra/integrations/supabase/client';
import { UploadRepository } from 'src/infra/repository/upload.repository';

@Injectable()
export class SingleUploadUseCase {
  constructor(
    private readonly supabase: SupabaseClientClass,
    private readonly uploadRepository: UploadRepository,
  ) {}

  public async execute(file: Express.Multer.File) {
    const type = MimeTypeToUploadTypeEnumMap(file.mimetype);
    const fileName = randomUUID();
    const filePath = `${type}/${fileName}`;
    const bucket = 'files';
    const { error } = await this.supabase.instance.storage
      .from(bucket)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      console.log('Erro ao salvar arquivo no Storage', error);
      throw error;
    }

    const link = this.supabase.generateStorageLink(bucket, filePath);

    return await this.uploadRepository.save({ link, type });
  }
}
