/*
  Warnings:

  - You are about to drop the `PostJoiners` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PostCandidatureStates" AS ENUM ('ACCEPTED', 'DENIED', 'WAITING');

-- DropForeignKey
ALTER TABLE "PostJoiners" DROP CONSTRAINT "PostJoiners_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostJoiners" DROP CONSTRAINT "PostJoiners_userId_fkey";

-- DropTable
DROP TABLE "PostJoiners";

-- DropEnum
DROP TYPE "PostJoinerStates";

-- CreateTable
CREATE TABLE "PostCandidatures" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "state" "PostCandidatureStates" NOT NULL DEFAULT E'WAITING',

    CONSTRAINT "PostCandidatures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostCandidatures" ADD CONSTRAINT "PostCandidatures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCandidatures" ADD CONSTRAINT "PostCandidatures_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
