import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../../domain/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../../domain/modules/users/dto/update-user.dto';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersRepository.create(createUserDto);
  }

  async findAll(query: Partial<UserDto>): Promise<UserDto[]> {
    return this.usersRepository.findAll(query) as Promise<UserDto[]>;
  }

  async findOne(email: string): Promise<UserDto> {
    return this.usersRepository.findByEmail(email);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    user: UserDto,
  ): Promise<UserDto> {
    if (id !== user.id) {
      throw new ForbiddenException("You're only able to update your own user");
    }

    return this.usersRepository.update(id, updateUserDto);
  }

  async delete(id: number): Promise<UserDto> {
    return this.usersRepository.delete(id);
  }
}
