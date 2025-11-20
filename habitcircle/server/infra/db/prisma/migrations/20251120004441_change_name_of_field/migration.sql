/*
  Warnings:

  - You are about to drop the column `type` on the `Account` table. All the data in the column will be lost.
  - Added the required column `authType` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('CREDENTIALS', 'OAUTH');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "type",
ADD COLUMN     "authType" "AuthType" NOT NULL;

-- DropEnum
DROP TYPE "public"."AccountType";
