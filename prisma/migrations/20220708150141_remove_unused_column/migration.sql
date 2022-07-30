/*
  Warnings:

  - The `state` column on the `PostCandidatures` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `availlablePositions` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `participation` on the `Posts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PostCandidatureState" AS ENUM ('ACCEPTED', 'DENIED', 'WAITING');

-- AlterTable
ALTER TABLE "PostCandidatures" DROP COLUMN "state",
ADD COLUMN     "state" "PostCandidatureState" NOT NULL DEFAULT E'WAITING';

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "availlablePositions",
DROP COLUMN "participation";

-- DropEnum
DROP TYPE "PostCandidatureStates";
