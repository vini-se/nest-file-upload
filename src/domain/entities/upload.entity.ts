import { upload } from 'generated/prisma';
import { UploadTypeEnum } from '../enum/upload-type.enum';

export class UploadEntity implements upload {
  id: string;
  link: string;
  type: UploadTypeEnum;
  created_at: Date;
  deleted_at: Date | null;
  updated_at: Date;
}

export type CreateUpload = Pick<UploadEntity, 'link' | 'type'>;
export type FilterUpload = Partial<UploadEntity>;
