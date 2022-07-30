import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/domain/modules/users/enums/role.enum';

export const RequireRole = (...roles: Role[]) => SetMetadata('roles', roles);
