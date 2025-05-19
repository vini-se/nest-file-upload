import { UploadTypeEnum } from '../enum/upload-type.enum';

const map: Record<string, UploadTypeEnum> = {
  image: UploadTypeEnum.IMG,
  audio: UploadTypeEnum.AUDIO,
  video: UploadTypeEnum.VIDEO,
};

export function MimeTypeToUploadTypeEnumMap(mimetype: string) {
  const text = mimetype.split('/')[0];
  return map[text] ?? UploadTypeEnum.FILE;
}
