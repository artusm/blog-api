import { Module } from '@nestjs/common';
import { PostCommentsController } from './controllers/post-comments.controller';
import { PostRatesController } from './controllers/post-rates.controller';
import { PostsController } from './controllers/posts.controller';
import { CommentRatesRepository } from './repositories/comment-rates.repository';
import { CommentsRepository } from './repositories/comments.repository';
import { PostAccessRepository } from './repositories/post-access.repository';
import { PostRatesRepository } from './repositories/post-rates.repository';
import { PostTagsRepository } from './repositories/post-tags.repository';
import { PostsRepository } from './repositories/posts.repository';
import { PostCommentsService } from './services/post-comments.service';
import { PostRatesService } from './services/post-rates.service';
import { PostsService } from './services/posts.service';

@Module({
  controllers: [PostsController, PostRatesController, PostCommentsController],
  providers: [
    PostsRepository,
    PostRatesRepository,
    CommentRatesRepository,
    PostTagsRepository,
    CommentsRepository,
    PostsService,
    PostRatesService,
    PostCommentsService,
    PostAccessRepository,
  ],
})
export class PostsModule {}
