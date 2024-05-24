/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClientAccessToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClientAuthorizationCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClientRefreshToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClientScope` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RolePermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Scope` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ScopePermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserAccessToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserDeactivationCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserDevices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserEmailNotification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserPassword` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserPasswordCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserRefreshToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserVerificationCode` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ClientAccessToken" DROP CONSTRAINT "ClientAccessToken_clientAuthorizationCodeId_fkey";

-- DropForeignKey
ALTER TABLE "ClientAccessToken" DROP CONSTRAINT "ClientAccessToken_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ClientAccessToken" DROP CONSTRAINT "ClientAccessToken_clientRefreshTokenId_fkey";

-- DropForeignKey
ALTER TABLE "ClientAuthorizationCode" DROP CONSTRAINT "ClientAuthorizationCode_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ClientRefreshToken" DROP CONSTRAINT "ClientRefreshToken_clientAuthorizationCodeId_fkey";

-- DropForeignKey
ALTER TABLE "ClientRefreshToken" DROP CONSTRAINT "ClientRefreshToken_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ClientScope" DROP CONSTRAINT "ClientScope_clientId_fkey";

-- DropForeignKey
ALTER TABLE "ClientScope" DROP CONSTRAINT "ClientScope_scopeId_fkey";

-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_parentPermissionId_fkey";

-- DropForeignKey
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_roleId_fkey";

-- DropForeignKey
ALTER TABLE "ScopePermission" DROP CONSTRAINT "ScopePermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "ScopePermission" DROP CONSTRAINT "ScopePermission_scopeId_fkey";

-- DropForeignKey
ALTER TABLE "UserAccessToken" DROP CONSTRAINT "UserAccessToken_userRefreshTokenId_fkey";

-- DropForeignKey
ALTER TABLE "UserPassword" DROP CONSTRAINT "UserPassword_userPasswordCodeId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Client_id_seq";

-- AlterTable
ALTER TABLE "ClientAccessToken" DROP CONSTRAINT "ClientAccessToken_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "clientId" SET DATA TYPE TEXT,
ALTER COLUMN "clientAuthorizationCodeId" SET DATA TYPE TEXT,
ALTER COLUMN "clientRefreshTokenId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClientAccessToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClientAccessToken_id_seq";

-- AlterTable
ALTER TABLE "ClientAuthorizationCode" DROP CONSTRAINT "ClientAuthorizationCode_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "clientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClientAuthorizationCode_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClientAuthorizationCode_id_seq";

-- AlterTable
ALTER TABLE "ClientRefreshToken" DROP CONSTRAINT "ClientRefreshToken_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "clientId" SET DATA TYPE TEXT,
ALTER COLUMN "clientAuthorizationCodeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClientRefreshToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClientRefreshToken_id_seq";

-- AlterTable
ALTER TABLE "ClientScope" DROP CONSTRAINT "ClientScope_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "scopeId" SET DATA TYPE TEXT,
ALTER COLUMN "clientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClientScope_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClientScope_id_seq";

-- AlterTable
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "parentPermissionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Permission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Permission_id_seq";

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AlterTable
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "roleId" SET DATA TYPE TEXT,
ALTER COLUMN "permissionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RolePermission_id_seq";

-- AlterTable
ALTER TABLE "Scope" DROP CONSTRAINT "Scope_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Scope_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Scope_id_seq";

-- AlterTable
ALTER TABLE "ScopePermission" DROP CONSTRAINT "ScopePermission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "scopeId" SET DATA TYPE TEXT,
ALTER COLUMN "permissionId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ScopePermission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ScopePermission_id_seq";

-- AlterTable
ALTER TABLE "UserAccessToken" DROP CONSTRAINT "UserAccessToken_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userRefreshTokenId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserAccessToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserAccessToken_id_seq";

-- AlterTable
ALTER TABLE "UserDeactivationCode" DROP CONSTRAINT "UserDeactivationCode_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserDeactivationCode_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserDeactivationCode_id_seq";

-- AlterTable
ALTER TABLE "UserDevices" DROP CONSTRAINT "UserDevices_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserDevices_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserDevices_id_seq";

-- AlterTable
ALTER TABLE "UserEmailNotification" DROP CONSTRAINT "UserEmailNotification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserEmailNotification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserEmailNotification_id_seq";

-- AlterTable
ALTER TABLE "UserPassword" DROP CONSTRAINT "UserPassword_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userPasswordCodeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserPassword_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserPassword_id_seq";

-- AlterTable
ALTER TABLE "UserPasswordCode" DROP CONSTRAINT "UserPasswordCode_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserPasswordCode_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserPasswordCode_id_seq";

-- AlterTable
ALTER TABLE "UserRefreshToken" DROP CONSTRAINT "UserRefreshToken_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserRefreshToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserRefreshToken_id_seq";

-- AlterTable
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "roleId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserRole_id_seq";

-- AlterTable
ALTER TABLE "UserVerificationCode" DROP CONSTRAINT "UserVerificationCode_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserVerificationCode_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserVerificationCode_id_seq";

-- AddForeignKey
ALTER TABLE "UserPassword" ADD CONSTRAINT "UserPassword_userPasswordCodeId_fkey" FOREIGN KEY ("userPasswordCodeId") REFERENCES "UserPasswordCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAccessToken" ADD CONSTRAINT "UserAccessToken_userRefreshTokenId_fkey" FOREIGN KEY ("userRefreshTokenId") REFERENCES "UserRefreshToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAuthorizationCode" ADD CONSTRAINT "ClientAuthorizationCode_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientRefreshToken" ADD CONSTRAINT "ClientRefreshToken_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientRefreshToken" ADD CONSTRAINT "ClientRefreshToken_clientAuthorizationCodeId_fkey" FOREIGN KEY ("clientAuthorizationCodeId") REFERENCES "ClientAuthorizationCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAccessToken" ADD CONSTRAINT "ClientAccessToken_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAccessToken" ADD CONSTRAINT "ClientAccessToken_clientAuthorizationCodeId_fkey" FOREIGN KEY ("clientAuthorizationCodeId") REFERENCES "ClientAuthorizationCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAccessToken" ADD CONSTRAINT "ClientAccessToken_clientRefreshTokenId_fkey" FOREIGN KEY ("clientRefreshTokenId") REFERENCES "ClientRefreshToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientScope" ADD CONSTRAINT "ClientScope_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientScope" ADD CONSTRAINT "ClientScope_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_parentPermissionId_fkey" FOREIGN KEY ("parentPermissionId") REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScopePermission" ADD CONSTRAINT "ScopePermission_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScopePermission" ADD CONSTRAINT "ScopePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
