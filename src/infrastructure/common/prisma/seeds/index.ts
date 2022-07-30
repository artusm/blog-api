import { PrismaService } from '../prisma.service';
import { UsersSeed } from './01-users.seed';

const client = new PrismaService();
const seeds = [UsersSeed];

(() => {
  seeds.reduce(async (previousSeed, nextSeed) => {
    await previousSeed;
    return nextSeed.run(client);
  }, Promise.resolve());
})();
