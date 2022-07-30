import { PartialType } from '@nestjs/swagger';
import { CreatePostCandidatureDto } from './create-post-candidature.dto';

export class UpdatePostCandidatureDto extends PartialType(
  CreatePostCandidatureDto,
) {}
