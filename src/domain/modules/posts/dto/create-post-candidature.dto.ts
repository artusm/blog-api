import { OmitType } from '@nestjs/swagger';
import { PostCandidatureDto } from './post-candidature.dto';

export class CreatePostCandidatureDto extends OmitType(PostCandidatureDto, [
  'id',
  'state',
]) {}
