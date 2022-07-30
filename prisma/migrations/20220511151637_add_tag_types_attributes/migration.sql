-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "typeAttributesRef" INTEGER,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "isAvailable" SET DEFAULT true;

-- CreateTable
CREATE TABLE "AdPostTypeAttributes" (
    "id" SERIAL NOT NULL,
    "frequency" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdPostTypeAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdCommentTypeAttributes" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdCommentTypeAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdAsideTypeAttributes" (
    "id" SERIAL NOT NULL,
    "campaignTime" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdAsideTypeAttributes_pkey" PRIMARY KEY ("id")
);
