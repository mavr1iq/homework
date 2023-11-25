/*
  Warnings:

  - You are about to alter the column `delivery_cost` on the `Orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- DropIndex
DROP INDEX "Orders_customer_id_key";

-- DropIndex
DROP INDEX "Orders_employee_id_key";

-- DropIndex
DROP INDEX "OrdersProducts_product_id_key";

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "delivery_cost" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
