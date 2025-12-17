/*
  Warnings:

  - A unique constraint covering the columns `[senderId,recipientId,circleId]` on the table `CircleInvite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CircleInvite_senderId_recipientId_circleId_key" ON "CircleInvite"("senderId", "recipientId", "circleId");
