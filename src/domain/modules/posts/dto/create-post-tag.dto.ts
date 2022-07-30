import { OmitType } from '@nestjs/swagger';
import { PostTagDto } from './post-tag.dto';

export class CreatePostTagDto extends OmitType(PostTagDto, [
  'createdAt',
  'updatedAt',
  'id',
  'postId',
]) {}
