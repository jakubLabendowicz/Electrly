/*
  Warnings:

  - You are about to drop the column `content` on the `UserEmailNotification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserEmailNotification" DROP COLUMN "content",
ADD COLUMN     "context" JSONB;
