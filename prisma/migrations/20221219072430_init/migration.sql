-- AlterTable
ALTER TABLE `Order` ADD COLUMN `parantOrderId` INTEGER NULL;

-- CreateTable
CREATE TABLE `ParantOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameNguoiNhan` VARCHAR(191) NOT NULL,
    `SoDienThoai` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `ThanhPho` VARCHAR(191) NOT NULL,
    `QuanHuyen` VARCHAR(191) NOT NULL,
    `XaPhuong` VARCHAR(191) NOT NULL,
    `DiaChi` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_parantOrderId_fkey` FOREIGN KEY (`parantOrderId`) REFERENCES `ParantOrder`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
