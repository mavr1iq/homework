/*
  Warnings:

  - Made the column `deleted` on table `Orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "deleted" SET NOT NULL,
ALTER COLUMN "deleted" SET DEFAULT false;
