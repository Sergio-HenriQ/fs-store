/*
  Warnings:

  - You are about to drop the column `imageUrs` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrs",
ADD COLUMN     "imageUrls" TEXT[];
