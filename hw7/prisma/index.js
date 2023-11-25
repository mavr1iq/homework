const express = require("express");
const productsController = require("./controllers/products.controller");
const ordersController = require("./controllers/orders.controller");
const employeesController = require("./controllers/employees.controller");
const customersController = require("./controllers/customers.controller")

const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("Varyvoda Kyryl Hw7")
});

app.use(express.json());
app.use("/products",productsController);
app.use("/orders",ordersController);
app.use("/employees",employeesController);
app.use("/customers",customersController);

app.listen(port,() => console.log(`listening on port: ${port}`));