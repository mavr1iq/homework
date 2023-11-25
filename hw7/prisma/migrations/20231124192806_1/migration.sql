/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Customer_id_seq";

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Employee_id_seq";

-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "customer_id" SET DATA TYPE TEXT,
ALTER COLUMN "employee_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Orders_id_seq";

-- AlterTable
ALTER TABLE "OrdersProducts" ALTER COLUMN "order_id" SET DATA TYPE TEXT,
ALTER COLUMN "product_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Products_id_seq";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersProducts" ADD CONSTRAINT "OrdersProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
