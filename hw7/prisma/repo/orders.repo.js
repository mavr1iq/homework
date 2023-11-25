const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const ordersClient = new PrismaClient().orders
const ordersProductsClient = new PrismaClient().ordersProducts

const getOrders = async() =>{
    return prisma.$queryRaw`SELECT * FROM "Orders"`
}
const getOrdersById = async(id) =>{
    const result = await prisma.$queryRaw`SELECT * FROM "Orders" WHERE id = ${id}`
    const test = await prisma.$queryRaw`SELECT * FROM "_Orders" WHERE id = ${id}`
    if (!result.length && !test.length) throw new Error("Order with such id does not exists")
    else if (test.length && !result.length) throw new Error("Order with such id was deleted")
    return result
}
const deleteOrders = async(id) =>{
    await getOrdersById(id)
    return ordersClient.delete({
        where: {
            id: id
        }
    })
}
const getOrdersInfo = async(id) =>{
    return  ordersClient.findMany({
        where:{
            customer_id: id
        }
    })
}
const getOrdersProductsInfo = async(id) =>{
    await getOrdersById(id)
    return  ordersProductsClient.findMany({
        select:{
            order_amount: true,
            product_id: true
        },
        where:{
            order_id: id
        }
    })
}

module.exports = {
    getOrders,
    getOrdersById,
    deleteOrders,
    getOrdersInfo,
    getOrdersProductsInfo
}