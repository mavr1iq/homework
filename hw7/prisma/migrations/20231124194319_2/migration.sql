/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `customer_id` on the `Orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `employee_id` on the `Orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `OrdersProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `OrdersProducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "OrdersProducts" DROP CONSTRAINT "OrdersProducts_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrdersProducts" DROP CONSTRAINT "OrdersProducts_product_id_fkey";

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "customer_id",
ADD COLUMN     "customer_id" INTEGER NOT NULL,
DROP COLUMN "employee_id",
ADD COLUMN     "employee_id" INTEGER NOT NULL,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrdersProducts" DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_customer_id_key" ON "Orders"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_employee_id_key" ON "Orders"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersProducts_order_id_key" ON "OrdersProducts"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "OrdersProducts_product_id_key" ON "OrdersProducts"("product_id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
