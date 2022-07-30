-- CreateEnum
CREATE TYPE "AccountPermissions" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "github" TEXT,
ADD COLUMN     "permission" "AccountPermissions" NOT NULL DEFAULT E'USER';
