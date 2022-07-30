/*
  Warnings:

  - You are about to drop the column `postId` on the `PostAccess` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostAccess" DROP CONSTRAINT "PostAccess_postId_fkey";

-- AlterTable
ALTER TABLE "PostAccess" DROP COLUMN "postId",
ADD COLUMN     "postSlug" TEXT;

-- AddForeignKey
ALTER TABLE "PostAccess" ADD CONSTRAINT "PostAccess_postSlug_fkey" FOREIGN KEY ("postSlug") REFERENCES "Posts"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
