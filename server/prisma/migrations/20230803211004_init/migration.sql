-- CreateTable
CREATE TABLE "UserDeactivationCode" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserDeactivationCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDeactivationCode_code_key" ON "UserDeactivationCode"("code");

-- AddForeignKey
ALTER TABLE "UserDeactivationCode" ADD CONSTRAINT "UserDeactivationCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
