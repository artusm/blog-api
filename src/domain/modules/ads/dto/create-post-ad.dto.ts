import { OmitType } from '@nestjs/swagger';
import { PostAdDto } from './post-ad.dto';

export class CreatePostAdDto extends OmitType(PostAdDto, [
  'id',
  'createdAt',
  'updatedAt',
  'isAvailable',
  'adContent',
]) {}
