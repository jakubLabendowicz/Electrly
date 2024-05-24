-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserEmailNotification" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
