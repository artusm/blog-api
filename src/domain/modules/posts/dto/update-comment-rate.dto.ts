import { PartialType } from '@nestjs/swagger';
import { CommentRateDto } from './comment-rate.dto';

export class UpdateCommentRateDto extends PartialType(CommentRateDto) {}
