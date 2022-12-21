/*
  Warnings:

  - You are about to alter the column `isHot` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `isHotSearch` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Book` MODIFY `isHot` BOOLEAN NULL,
    MODIFY `isHotSearch` BOOLEAN NULL;
