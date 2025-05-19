import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/client/prisma.service';
import { CreateUpload } from 'src/domain/entities/upload.entity';

@Injectable()
export class UploadRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listOne(id: string) {
    return await this.prisma.upload.findUnique({
      where: { id },
    });
  }

  async save(data: CreateUpload) {
    try {
      return await this.prisma.upload.create({
        data,
      });
    } catch (error) {
      console.log('Erro ao inserir novo Upload');
      throw error;
    }
  }

  async saveMany(data: CreateUpload[]) {
    return await this.prisma.upload.createMany({
      data,
    });
  }
}
