-- DropForeignKey
ALTER TABLE "CommentRates" DROP CONSTRAINT "CommentRates_commentId_fkey";

-- DropForeignKey
ALTER TABLE "CommentRates" DROP CONSTRAINT "CommentRates_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostCandidatures" DROP CONSTRAINT "PostCandidatures_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostCandidatures" DROP CONSTRAINT "PostCandidatures_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostRates" DROP CONSTRAINT "PostRates_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostRates" DROP CONSTRAINT "PostRates_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostTags" DROP CONSTRAINT "PostTags_postId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_userId_fkey";

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTags" ADD CONSTRAINT "PostTags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCandidatures" ADD CONSTRAINT "PostCandidatures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCandidatures" ADD CONSTRAINT "PostCandidatures_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostRates" ADD CONSTRAINT "PostRates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostRates" ADD CONSTRAINT "PostRates_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentRates" ADD CONSTRAINT "CommentRates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentRates" ADD CONSTRAINT "CommentRates_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
