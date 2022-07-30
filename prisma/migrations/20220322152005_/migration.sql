-- CreateEnum
CREATE TYPE "PostJoinerStates" AS ENUM ('ACCEPTED', 'DENIED', 'WAITING');

-- AlterTable
ALTER TABLE "PostJoiners" ADD COLUMN     "state" "PostJoinerStates" NOT NULL DEFAULT E'WAITING';
