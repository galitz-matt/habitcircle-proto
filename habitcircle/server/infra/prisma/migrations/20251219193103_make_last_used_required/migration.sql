/*
  Warnings:

  - Made the column `lastUsedAt` on table `OAuthAccount` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OAuthAccount" ALTER COLUMN "lastUsedAt" SET NOT NULL;
