/*
  Warnings:

  - You are about to drop the column `userId` on the `ParantOrder` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ParantOrder` DROP FOREIGN KEY `ParantOrder_userId_fkey`;

-- AlterTable
ALTER TABLE `ParantOrder` DROP COLUMN `userId`,
    ADD COLUMN `userName` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ParantOrder` ADD CONSTRAINT `ParantOrder_userName_fkey` FOREIGN KEY (`userName`) REFERENCES `User`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
