/*
  Warnings:

  - Added the required column `deleted` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "deleted" BOOLEAN NOT NULL;
