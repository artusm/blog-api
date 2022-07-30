import {
  CreateEntity,
  DeleteEntity,
  FindAllEntity,
  UpdateEntity,
} from '../../../common/base/repository.base';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDto } from '../dto/user.dto';

export interface IUsersRepository
  extends CreateEntity<UserDto, CreateUserDto>,
    UpdateEntity<UserDto, UpdateUserDto>,
    DeleteEntity<UserDto>,
    FindAllEntity<UserDto, Partial<UserDto>> {
  findByEmail(email: string): Promise<UserDto>;
}
