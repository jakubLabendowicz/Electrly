/*
  Warnings:

  - You are about to drop the `UserScope` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserScope" DROP CONSTRAINT "UserScope_scopeId_fkey";

-- DropForeignKey
ALTER TABLE "UserScope" DROP CONSTRAINT "UserScope_userId_fkey";

-- DropTable
DROP TABLE "UserScope";

-- CreateTable
CREATE TABLE "UserDevices" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserDevices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserDevices" ADD CONSTRAINT "UserDevices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
