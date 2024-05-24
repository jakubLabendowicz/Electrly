-- DropForeignKey
ALTER TABLE "UserEmailNotification" DROP CONSTRAINT "UserEmailNotification_userId_fkey";

-- AlterTable
ALTER TABLE "UserEmailNotification" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserEmailNotification" ADD CONSTRAINT "UserEmailNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
