import { Logger } from '@nestjs/common';
import { Role } from '../../../../domain/modules/users/enums/role.enum';
import { PrismaService } from '../prisma.service';

export class UsersSeed {
  private static readonly logger = new Logger(UsersSeed.name);

  static async run(client: PrismaService) {
    this.logger.log('Running posts seed... 🌱');

    try {
      await client.users.create({
        data: {
          email: 'artusm@artusm.artusm',
          name: 'Arthur',
          github: 'artusm',
          role: Role.ADMIN,
        },
      });
    } catch (error) {
      UsersSeed.logger.error(error, 'PrismaSeeds');
    }
  }
}
