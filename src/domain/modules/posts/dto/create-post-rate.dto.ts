import { OmitType } from '@nestjs/swagger';
import { PostRateDto } from './post-rate.dto';

export class CreatePostRateDto extends OmitType(PostRateDto, ['id']) {}
