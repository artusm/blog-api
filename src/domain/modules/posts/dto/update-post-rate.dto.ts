import { PartialType } from '@nestjs/swagger';
import { PostRateDto } from './post-rate.dto';

export class UpdatePostRateDto extends PartialType(PostRateDto) {}
