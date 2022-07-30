/*
  Warnings:

  - A unique constraint covering the columns `[github]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "PostTags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostTags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostTags_name_key" ON "PostTags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_github_key" ON "Users"("github");

-- AddForeignKey
ALTER TABLE "PostTags" ADD CONSTRAINT "PostTags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
