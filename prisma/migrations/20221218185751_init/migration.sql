/*
  Warnings:

  - You are about to drop the column `nameSanPham` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `soLuong` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `nameSanPham`,
    ADD COLUMN `bookName` VARCHAR(191) NULL,
    MODIFY `soLuong` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_bookName_fkey` FOREIGN KEY (`bookName`) REFERENCES `Book`(`nameBook`) ON DELETE SET NULL ON UPDATE CASCADE;
