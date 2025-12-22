/*
  Warnings:

  - You are about to drop the column `emailAddress` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailAddress]` on the table `CredentialsAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailAddress` to the `CredentialsAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_emailAddress_key";

-- AlterTable
ALTER TABLE "CredentialsAccount" ADD COLUMN     "emailAddress" CITEXT NOT NULL;

-- AlterTable
ALTER TABLE "OAuthAccount" ADD COLUMN     "emailAddress" TEXT,
ADD COLUMN     "emailVerified" BOOLEAN;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailAddress";

-- CreateIndex
CREATE UNIQUE INDEX "CredentialsAccount_emailAddress_key" ON "CredentialsAccount"("emailAddress");
