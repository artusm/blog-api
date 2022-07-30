import {
  CreateEntity,
  DeleteEntity,
  FindAllEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CreatePostDto } from '../dto/create-post.dto';
import { FindPostByQueryDto } from '../dto/find-post-by-query.dto';
import { PostDto } from '../dto/post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

export interface IPostRepository
  extends CreateEntity<PostDto, CreatePostDto>,
    UpdateEntity<PostDto, UpdatePostDto>,
    FindAllEntity<PostDto, FindPostByQueryDto>,
    DeleteEntity<PostDto> {
  findBySlug(slug: string): Promise<PostDto>;
  findByText(text: string): Promise<PostDto[]>;
}
