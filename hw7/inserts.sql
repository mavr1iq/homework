--Customer
INSERT INTO "Customer"(first_name, middle_name, last_name, email, birth_date)
VALUES('Kyryl',null,'Varyvoda','kivar2006@gmail.com','10-04-2006')
--Employee
INSERT INTO "Employee"(first_name, middle_name, last_name, position)
VALUES('Matvii',null,'Popov','Cashier')
--Products
INSERT INTO "Products"(name, amount, price,category)
VALUES('product1',100,3.5,'Smartphones')
INSERT INTO "Products"(name, amount, price,category)
VALUES('product2',100,2,'Laptops')
--Orders
INSERT INTO "Orders"(order_adress, delivery_cost, customer_id, employee_id)
VALUES('Dundalk',5.0,1,1)
--OrdersProducts
INSERT INTO "OrdersProducts"(order_amount, order_id, product_id)
VALUES(5,1,2)
--View for Orders which wasn't deleted
ALTER TABLE "Orders" RENAME TO "_Orders";
CREATE VIEW "Orders" AS SELECT * FROM "_Orders" WHERE NOT deleted;
--Soft deletion rule
CREATE OR REPLACE RULE "_soft_deletion" AS ON DELETE TO "Orders" DO INSTEAD (
  UPDATE "Orders" SET deleted = true WHERE id = old.id AND NOT deleted;
    DELETE FROM "OrdersProducts" WHERE order_id = old.id
);