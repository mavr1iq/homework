const { PrismaClient } = require("@prisma/client")
const ordersRepo = require("./orders.repo");
const productsRepo = require("./products.repo");

const customersClient = new PrismaClient().customer

const getCustomers = async() =>{
    return customersClient.findMany({})
}
const getCustomersById = async(id) =>{
    const result = await customersClient.findUnique({
        where:{
            id: id
        }
    })
    if (!result) throw new Error("Customer with such id doesn't exists")
    return result
}
const totalCost = async(id) =>{
    let result = 0;
    await getCustomersById(id)

    const ordersInfo = await ordersRepo.getOrdersInfo(id);
    let ordersId = [];
    for (let el of ordersInfo){
        let { delivery_cost, id } = el
        result += delivery_cost
        ordersId.push(id)
    }

    let amount = [];
    let productsId = [];
    for (let id of ordersId){
        let ordersProductInfo = await ordersRepo.getOrdersProductsInfo(id)
        let { order_amount, product_id } = ordersProductInfo[0];
        amount.push(order_amount);
        productsId.push(product_id);
    }

    for (let index = 0; index < productsId.length; index++){
        let productsInfo = await productsRepo.getProductById(productsId[index]);
        let { price } = productsInfo
        result += amount[index] * price
    }
    return {"orders": ordersInfo, "totalCost": result}
}
module.exports = {
    getCustomersById,
    getCustomers,
    totalCost
}