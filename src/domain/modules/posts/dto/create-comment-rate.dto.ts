import { OmitType } from '@nestjs/swagger';
import { CommentRateDto } from './comment-rate.dto';

export class CreateCommentRateDto extends OmitType(CommentRateDto, ['id']) {}
