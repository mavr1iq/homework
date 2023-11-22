const express = require("express");
const productsRoute = require('./src/products/routes')
const ordersRoute = require("./src/orders/routes")
const employeesRoute = require("./src/employee/routes")
const customersRoute = require("./src/customer/routes")
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("Varyvoda Kyryl HW7");
})

app.use(express.json());
app.use("/products",productsRoute);
app.use("/orders",ordersRoute);
app.use("/employees",employeesRoute);
app.use("/customers",customersRoute);

app.listen(port,() => console.log('listening on port 3000'))