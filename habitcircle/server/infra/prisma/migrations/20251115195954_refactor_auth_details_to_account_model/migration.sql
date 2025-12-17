/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CREDENTIALS', 'OAUTH');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "emailVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "failedAttempts" INTEGER DEFAULT 0,
ADD COLUMN     "hashedPassword" TEXT,
ADD COLUMN     "passwordVersion" INTEGER,
ADD COLUMN     "type" "AccountType" NOT NULL,
ALTER COLUMN "provider" DROP NOT NULL,
ALTER COLUMN "providerAccountId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";
