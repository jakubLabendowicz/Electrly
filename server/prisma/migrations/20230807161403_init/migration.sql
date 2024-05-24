/*
  Warnings:

  - You are about to drop the column `redirectUri` on the `ClientAuthorizationCode` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientAccessToken" DROP CONSTRAINT "ClientAccessToken_clientAuthorizationCodeId_fkey";

-- DropForeignKey
ALTER TABLE "ClientRefreshToken" DROP CONSTRAINT "ClientRefreshToken_clientAuthorizationCodeId_fkey";

-- AlterTable
ALTER TABLE "ClientAccessToken" ALTER COLUMN "clientAuthorizationCodeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ClientAuthorizationCode" DROP COLUMN "redirectUri";

-- AlterTable
ALTER TABLE "ClientRefreshToken" ALTER COLUMN "clientAuthorizationCodeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ClientRefreshToken" ADD CONSTRAINT "ClientRefreshToken_clientAuthorizationCodeId_fkey" FOREIGN KEY ("clientAuthorizationCodeId") REFERENCES "ClientAuthorizationCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAccessToken" ADD CONSTRAINT "ClientAccessToken_clientAuthorizationCodeId_fkey" FOREIGN KEY ("clientAuthorizationCodeId") REFERENCES "ClientAuthorizationCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
