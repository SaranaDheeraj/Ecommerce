/*
  Warnings:

  - Added the required column `image` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "image" TEXT NOT NULL;
