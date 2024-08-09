/*
  Warnings:

  - The primary key for the `productorder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `colorId` on the `productorder` table. All the data in the column will be lost.
  - You are about to drop the column `sizeId` on the `productorder` table. All the data in the column will be lost.
  - Added the required column `color` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productorder` DROP PRIMARY KEY,
    DROP COLUMN `colorId`,
    DROP COLUMN `sizeId`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`productId`, `color`, `size`);
