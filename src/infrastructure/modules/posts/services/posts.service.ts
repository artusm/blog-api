import { Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from '../../../../domain/modules/posts/dto/create-post.dto';
import { FindPostByQueryDto } from '../../../../domain/modules/posts/dto/find-post-by-query.dto';
import { PostDto } from '../../../../domain/modules/posts/dto/post.dto';
import { UpdatePostDto } from '../../../../domain/modules/posts/dto/update-post.dto';
import { PostRatesRepository } from '../repositories/post-rates.repository';
import { PostsRepository } from '../repositories/posts.repository';
import { PostTagsRepository } from '../repositories/post-tags.repository';
import { PostTagDto } from '../../../../domain/modules/posts/dto/post-tag.dto';
import { PostAccessRepository } from '../repositories/post-access.repository';
import { textToSlugUtil } from '../../../common/utils/text-to-slug.util';
import { PostAcessDto } from 'src/domain/modules/posts/dto/post-acess.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository,
    private readonly postRatesRepository: PostRatesRepository,
    private readonly postTagsRepository: PostTagsRepository,
    private readonly postAccessRepository: PostAccessRepository,
  ) {}

  public async create(createPostDto: CreatePostDto): Promise<PostDto> {
    const slug = textToSlugUtil(createPostDto.title);
    return this.postsRepository.create({ ...createPostDto, slug });
  }

  private async findAllUserRatedPost({
    rateValue,
    userId,
  }: Pick<FindPostByQueryDto, 'userId' | 'rateValue'>) {
    const posts = await this.postRatesRepository.findUserRatedPosts({
      userId,
      rateValue,
    });

    return posts.map((post) => post.post);
  }

  private async findByTextSearch(text: string) {
    return this.postsRepository.findByText(text);
  }

  public async findAll(
    findPostByQueryDto: FindPostByQueryDto,
  ): Promise<PostDto[]> {
    const { userId, rateValue, input } = findPostByQueryDto;

    if (userId && rateValue) {
      return this.findAllUserRatedPost({ rateValue, userId });
    }

    if (input) {
      return this.findByTextSearch(input) as Promise<PostDto[]>;
    }

    return this.postsRepository.findAll(findPostByQueryDto);
  }

  public async findOne(slug: string, userId: number): Promise<PostDto> {
    const post = await this.postsRepository.findBySlug(slug);
    await this.postAccessRepository.create({
      postSlug: slug,
      userId,
    });

    return post;
  }

  public async update(
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<PostDto> {
    return this.postsRepository.update(id, updatePostDto);
  }

  public async delete(id: number): Promise<PostDto> {
    return this.postsRepository.delete(id);
  }

  public async findAllPostTags(): Promise<PostTagDto[]> {
    const tags = await this.postTagsRepository.findAll();
    const names = tags.map((tag) => tag.name);
    const filteredNames = new Set(names);

    const filteredTags = [...filteredNames].map((tag) => {
      const ft = new PostTagDto();
      Object.assign(ft, { name: tag });
      return ft;
    });

    return [...filteredTags];
  }

  public async findPostAccesses(postSlug: string): Promise<PostAcessDto[]> {
    return this.postAccessRepository.findAll({
      postSlug,
    });
  }
}
