/*
  Warnings:

  - You are about to drop the column `from` on the `UserEmailNotification` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `UserEmailNotification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserEmailNotification" DROP COLUMN "from",
DROP COLUMN "to";
