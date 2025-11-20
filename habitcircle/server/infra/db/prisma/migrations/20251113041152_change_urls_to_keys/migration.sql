/*
  Warnings:

  - You are about to drop the column `photoUrl` on the `Circle` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `profilePictureUrl` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Circle" DROP COLUMN "photoUrl",
ADD COLUMN     "photoKey" TEXT;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "photoUrl",
ADD COLUMN     "photoKey" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePictureUrl",
ADD COLUMN     "profilePictureKey" TEXT;
