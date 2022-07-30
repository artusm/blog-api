import {
  CreateEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CreatePostCandidatureDto } from '../dto/create-post-candidature.dto';
import { PostCandidatureDto } from '../dto/post-candidature.dto';
import { UpdatePostCandidatureDto } from '../dto/update-post-candidature.dto';

export interface IPostCandidaturesRepository
  extends CreateEntity<PostCandidatureDto, CreatePostCandidatureDto>,
    UpdateEntity<PostCandidatureDto, UpdatePostCandidatureDto> {}
