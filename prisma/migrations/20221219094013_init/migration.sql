-- AlterTable
ALTER TABLE `ParantOrder` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ParantOrder` ADD CONSTRAINT `ParantOrder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
