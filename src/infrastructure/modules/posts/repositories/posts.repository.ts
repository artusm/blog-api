import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../../../../domain/modules/posts/dto/create-post.dto';
import { UpdatePostDto } from '../../../../domain/modules/posts/dto/update-post.dto';
import { FindPostByQueryDto } from '../../../../domain/modules/posts/dto/find-post-by-query.dto';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { IPostRepository } from '../../../../domain/modules/posts/interfaces/post.repository.interface';
import { PostDto } from '../../../../domain/modules/posts/dto/post.dto';

@Injectable()
export class PostsRepository implements IPostRepository {
  constructor(private readonly client: PrismaService) {}

  public async create({ tags, ...dto }: CreatePostDto): Promise<PostDto> {
    return this.client.posts.create({
      data: {
        ...dto,
        ...(tags && {
          tags: { createMany: { data: tags.map((tag) => ({ name: tag })) } },
        }),
      },
    });
  }

  public async update(id: number, data: UpdatePostDto): Promise<PostDto> {
    const { tags, ...dto } = data;

    return this.client.posts.update({
      where: { id },
      data: {
        ...dto,
        tags: {
          deleteMany: { postId: id },
          createMany: {
            data: tags?.map((tag) => ({ name: tag })),
          },
        },
      },
    });
  }

  public async findBySlug(slug: string): Promise<PostDto> {
    return this.client.posts.findUnique({
      where: { slug },
      include: {
        user: true,
        rates: true,
        tags: true,
        comments: {
          include: {
            rates: true,
            user: true,
          },
          orderBy: {
            rates: {
              _count: 'desc',
            },
          },
        },
        candidatures: {
          include: {
            user: true,
          },
        },
      },
    }) as Promise<PostDto>;
  }

  public async findAll(query: FindPostByQueryDto): Promise<PostDto[]> {
    const { tag, ...dto } = query;
    return this.client.posts.findMany({
      where: {
        ...dto,
        ...(tag && {
          tags: {
            some: {
              name: tag,
            },
          },
        }),
      },
      include: {
        user: true,
        rates: true,
        comments: true,
        candidatures: true,
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }) as Promise<PostDto[]>;
  }

  public async findByText(text: string): Promise<PostDto[]> {
    return this.client.posts.findMany({
      where: {
        OR: [
          {
            title: {
              contains: text,
            },
          },
          {
            description: {
              contains: text,
            },
          },
          {
            content: {
              contains: text,
            },
          },
        ],
      },
      include: {
        user: true,
        rates: true,
        comments: true,
        candidatures: true,
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }) as Promise<PostDto[]>;
  }

  public async delete(id: number): Promise<PostDto> {
    return this.client.posts.delete({
      where: {
        id,
      },
    });
  }
}
