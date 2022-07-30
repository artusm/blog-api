/*
  Warnings:

  - You are about to drop the column `permission` on the `Users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "permission",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';

-- DropEnum
DROP TYPE "AccountPermissions";
