import { OmitType } from '@nestjs/swagger';
import { CommentDto } from './comment.dto';

export class CreateCommentDto extends OmitType(CommentDto, [
  'createdAt',
  'updatedAt',
  'id',
  'user',
  'rates',
]) {}
