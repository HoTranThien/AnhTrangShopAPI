/*
  Warnings:

  - The primary key for the `productorder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `productorder` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`productId`, `color`, `size`, `orderId`);
