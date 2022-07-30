/*
  Warnings:

  - You are about to drop the `AdContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AsideAds" DROP CONSTRAINT "AsideAds_adContentId_fkey";

-- DropForeignKey
ALTER TABLE "FeedAds" DROP CONSTRAINT "FeedAds_adContentId_fkey";

-- DropForeignKey
ALTER TABLE "PostAds" DROP CONSTRAINT "PostAds_adContentId_fkey";

-- DropTable
DROP TABLE "AdContent";

-- CreateTable
CREATE TABLE "AdContents" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdContents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedAds" ADD CONSTRAINT "FeedAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAds" ADD CONSTRAINT "PostAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsideAds" ADD CONSTRAINT "AsideAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
