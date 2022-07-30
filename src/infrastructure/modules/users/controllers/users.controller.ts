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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from '../../../../domain/modules/users/enums/role.enum';
import { CreateUserDto } from '../../../../domain/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../../domain/modules/users/dto/update-user.dto';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';
import { RequireRole } from '../../../common/decorators/require-role.decorator';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { UsersService } from '../services/users.service';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { GetUser } from '../../../common/decorators/get-user.decorator';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: UserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: UserDto })
  findAll(@Query() userDto: Partial<UserDto>): Promise<UserDto[]> {
    return this.usersService.findAll(userDto);
  }

  @Get(':email')
  @ApiResponse({ type: UserDto })
  findOne(@Param('email') email: string): Promise<UserDto> {
    return this.usersService.findOne(email);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: UserDto })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: UserDto,
  ): Promise<UserDto> {
    return this.usersService.update(+id, updateUserDto, user);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @RequireRole(Role.ADMIN)
  @ApiBearerAuth()
  @ApiResponse({ type: UserDto })
  delete(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.delete(+id);
  }
}
