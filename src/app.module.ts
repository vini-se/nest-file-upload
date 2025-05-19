import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './app/modules/upload/upload.module';
import { PrismaModule } from './infra/database/client/prisma.module';

@Module({
  imports: [UploadModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
