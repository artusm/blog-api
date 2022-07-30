import {
  CreateEntity,
  DeleteEntity,
  FindAllEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CommentDto } from '../dto/comment.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export interface ICommentsRepository
  extends CreateEntity<CommentDto, CreateCommentDto>,
    DeleteEntity<CommentDto>,
    UpdateEntity<CommentDto, UpdateCommentDto>,
    FindAllEntity<CommentDto, Partial<Omit<CommentDto, 'user' | 'rates'>>> {}
