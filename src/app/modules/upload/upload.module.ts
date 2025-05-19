import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { SingleUploadUseCase } from './use-case/single.upload.use-case';
import { SupabaseClientClass } from 'src/infra/integrations/supabase/client';
import { UploadRepository } from 'src/infra/repository/upload.repository';
import { ManyUploadUseCase } from './use-case/many.upload.use-case';

@Module({
  controllers: [UploadController],
  providers: [
    SingleUploadUseCase,
    ManyUploadUseCase,
    SupabaseClientClass,
    UploadRepository,
  ],
})
export class UploadModule {}
