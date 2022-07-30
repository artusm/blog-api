import {
  CreateEntity,
  FindAllEntity,
} from '../../../common/base/repository.base';
import { CreatePostAccessDto } from '../dto/create-post-access.dto';
import { PostAcessDto } from '../dto/post-acess.dto';

export interface IPostAccessRepository
  extends CreateEntity<PostAcessDto, CreatePostAccessDto>,
    FindAllEntity<PostAcessDto, Partial<PostAcessDto>> {}
