/*
  Warnings:

  - A unique constraint covering the columns `[userId,habitId,completedAt]` on the table `Completion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `completedAt` to the `Completion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Completion_userId_habitId_key";

-- AlterTable
ALTER TABLE "Completion" ADD COLUMN     "completedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Completion_userId_habitId_completedAt_key" ON "Completion"("userId", "habitId", "completedAt");
