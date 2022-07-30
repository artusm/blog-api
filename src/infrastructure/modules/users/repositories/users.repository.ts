import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { CreateUserDto } from '../../../../domain/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../../domain/modules/users/dto/update-user.dto';
import { UserDto } from '../../../../domain/modules/users/dto/user.dto';
import { IUsersRepository } from '../../../../domain/modules/users/interfaces/users.repository.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly client: PrismaService) {}

  public async create(createUserDto: CreateUserDto): Promise<UserDto> {
    return this.client.users.create({
      data: createUserDto,
    }) as Promise<UserDto>;
  }

  public async update(
    id: number,
    { image, name }: UpdateUserDto,
  ): Promise<UserDto> {
    return this.client.users.update({
      where: { id },
      data: { image, name },
    }) as Promise<UserDto>;
  }

  public async findByEmail(email: string): Promise<UserDto> {
    return this.client.users.findUnique({
      where: { email },
    }) as Promise<UserDto>;
  }

  public async findAll(query: Partial<UserDto>): Promise<UserDto[]> {
    return this.client.users.findMany({
      where: {
        ...query,
      },
    }) as Promise<UserDto[]>;
  }

  public async delete(id: number): Promise<UserDto> {
    return this.client.users.delete({
      where: {
        id,
      },
    }) as Promise<UserDto>;
  }
}
