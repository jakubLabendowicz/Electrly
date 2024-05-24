-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "parentPermissionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_parentPermissionId_fkey" FOREIGN KEY ("parentPermissionId") REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
