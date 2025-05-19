import { Injectable } from '@nestjs/common';
import { SingleUploadUseCase } from './single.upload.use-case';

@Injectable()
export class ManyUploadUseCase {
  constructor(private readonly singleUploadUseCase: SingleUploadUseCase) {}

  public async execute(files: Express.Multer.File[]) {
    const response = await Promise.all(
      files.map((file) => this.singleUploadUseCase.execute(file)),
    );

    return response;
  }
}
