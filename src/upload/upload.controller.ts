import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post('many')
  @UseInterceptors(FilesInterceptor('files'))
  uploadManyFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
}
