-- AddForeignKey
ALTER TABLE "PostAccess" ADD CONSTRAINT "PostAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAccess" ADD CONSTRAINT "PostAccess_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
