import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { SingleUploadUseCase } from './use-case/single.upload.use-case';
import { ManyUploadUseCase } from './use-case/many.upload.use-case';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly singleUploadUseCase: SingleUploadUseCase,
    private readonly manyUploadUseCase: ManyUploadUseCase,
  ) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    return await this.singleUploadUseCase.execute(file);
  }

  @Post('many')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadManyFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return await this.manyUploadUseCase.execute(files);
  }
}
