import {
  CreateEntity,
  FindAllEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CreatePostRateDto } from '../dto/create-post-rate.dto';
import { FindUserRatedPostsDto } from '../dto/find-user-rated-posts.dto';
import { PostRateDto } from '../dto/post-rate.dto';
import { UpdatePostRateDto } from '../dto/update-post-rate.dto';
import { UserRatedPostDto } from '../dto/user-rated-post.dto';

export interface IPostRatesRepository
  extends CreateEntity<PostRateDto, CreatePostRateDto>,
    UpdateEntity<PostRateDto, UpdatePostRateDto>,
    FindAllEntity<PostRateDto, Partial<PostRateDto>> {
  findUserRatedPosts(data: FindUserRatedPostsDto): Promise<UserRatedPostDto[]>;
}
