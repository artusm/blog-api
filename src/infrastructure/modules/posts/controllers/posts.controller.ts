import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { CreatePostDto } from '../../../../domain/modules/posts/dto/create-post.dto';
import { UpdatePostDto } from '../../../../domain/modules/posts/dto/update-post.dto';
import { PostDto } from '../../../../domain/modules/posts/dto/post.dto';
import { FindPostByQueryDto } from '../../../../domain/modules/posts/dto/find-post-by-query.dto';
import { PostTagDto } from '../../../../domain/modules/posts/dto/post-tag.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { RequireRole } from '../../../common/decorators/require-role.decorator';
import { Role } from '../../../../domain/modules/users/enums/role.enum';
import { NonBlockingJwtAuthGuard } from '../../../../infrastructure/common/guards/non-blocking-jwt-auth.guard';
import { GetUser } from '../../../../infrastructure/common/decorators/get-user.decorator';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';
import { PostAcessDto } from 'src/domain/modules/posts/dto/post-acess.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiTags('tags')
  @Get('/tags')
  @ApiResponse({ type: [PostTagDto] })
  findAllPostTags(): Promise<PostTagDto[]> {
    return this.postsService.findAllPostTags();
  }

  @ApiTags('accesses')
  @Get('/:slug/accesses')
  @ApiResponse({ type: [PostAcessDto] })
  public async findAllPostAccess(
    @Param('slug') slug: string,
  ): Promise<PostAcessDto[]> {
    return this.postsService.findPostAccesses(slug);
  }

  @ApiTags('posts')
  @Post()
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: PostDto })
  create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
    return this.postsService.create(createPostDto);
  }

  @ApiTags('posts')
  @Get()
  @ApiResponse({ type: [PostDto] })
  findAll(@Query() findPostByQueryDto: FindPostByQueryDto): Promise<PostDto[]> {
    return this.postsService.findAll(findPostByQueryDto);
  }

  @ApiTags('posts')
  @UseGuards(NonBlockingJwtAuthGuard)
  @ApiBearerAuth()
  @Get('/:slug')
  @ApiResponse({ type: PostDto })
  findOne(
    @Param('slug') slug: string,
    @GetUser() user: UserDto,
  ): Promise<PostDto> {
    console.log(user);
    return this.postsService.findOne(slug, user?.id);
  }

  @ApiTags('posts')
  @Patch(':id')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: PostDto })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostDto> {
    return this.postsService.update(+id, updatePostDto);
  }

  @ApiTags('posts')
  @Delete(':id')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: PostDto })
  delete(@Param('id') id: string): Promise<PostDto> {
    return this.postsService.delete(+id);
  }
}
