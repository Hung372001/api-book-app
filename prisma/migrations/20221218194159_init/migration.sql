/*
  Warnings:

  - You are about to drop the column `bookName` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gia]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookname` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_bookName_fkey`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `bookName`,
    ADD COLUMN `bookId` INTEGER NOT NULL,
    ADD COLUMN `bookname` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Book_gia_key` ON `Book`(`gia`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_bookname_fkey` FOREIGN KEY (`bookname`) REFERENCES `BookName`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_price_fkey` FOREIGN KEY (`price`) REFERENCES `Book`(`gia`) ON DELETE RESTRICT ON UPDATE CASCADE;
