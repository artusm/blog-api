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
import { CreateCommentDto } from '../../../../domain/modules/posts/dto/create-comment.dto';
import { CommentDto } from '../../../../domain/modules/posts/dto/comment.dto';
import { UpdateCommentDto } from '../../../../domain/modules/posts/dto/update-comment.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostCommentsService } from '../services/post-comments.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RequireRole } from '../../../common/decorators/require-role.decorator';
import { Role } from '../../../../domain/modules/users/enums/role.enum';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { GetUser } from '../../../common/decorators/get-user.decorator';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';

@ApiTags('comments')
@Controller('posts/comments')
export class PostCommentsController {
  constructor(private readonly postCommentsService: PostCommentsService) {}

  @Get('/')
  async findAll(@Query('postId') postId: string) {
    return this.postCommentsService.findAll(+postId);
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: CommentDto })
  public async create(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<CommentDto> {
    return this.postCommentsService.create(createCommentDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: CommentDto })
  public async delete(
    @Param('id') id: string,
    @GetUser() user: UserDto,
  ): Promise<CommentDto> {
    return this.postCommentsService.delete(+id, user);
  }

  @Patch('/:id')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: CommentDto })
  public async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<CommentDto> {
    return this.postCommentsService.update(+id, updateCommentDto);
  }
}
