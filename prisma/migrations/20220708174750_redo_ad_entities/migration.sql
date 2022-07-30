/*
  Warnings:

  - You are about to drop the `AdAsideTypeAttributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AdCommentTypeAttributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AdPostTypeAttributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AdAsideTypeAttributes";

-- DropTable
DROP TABLE "AdCommentTypeAttributes";

-- DropTable
DROP TABLE "AdPostTypeAttributes";

-- DropTable
DROP TABLE "Ads";

-- CreateTable
CREATE TABLE "AdContent" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedAds" (
    "id" SERIAL NOT NULL,
    "adContentId" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "frequency" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedAds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostAds" (
    "id" SERIAL NOT NULL,
    "adContentId" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostAds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsideAds" (
    "id" SERIAL NOT NULL,
    "adContentId" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "campaignTime" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AsideAds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedAds" ADD CONSTRAINT "FeedAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAds" ADD CONSTRAINT "PostAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsideAds" ADD CONSTRAINT "AsideAds_adContentId_fkey" FOREIGN KEY ("adContentId") REFERENCES "AdContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
