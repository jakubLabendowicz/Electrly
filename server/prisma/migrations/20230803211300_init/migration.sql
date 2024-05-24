/*
  Warnings:

  - Added the required column `updatedAt` to the `UserDeactivationCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserDeactivationCode" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
