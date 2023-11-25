const { PrismaClient, Category} = require("@prisma/client")
const categoryArr = Object.values(Category)

const productsClient = new PrismaClient().products

const getProducts = async() =>{
    return productsClient.findMany({});
}
const getProductById = async(id) =>{

    const result = await productsClient.findUnique({
        where: {
            id: id
        }
    })
    if (result === null) throw new Error("Product with such Id doesn`t exists")
    return result
}
const addProduct = async(body) =>{
    if (!categoryArr.includes(category)) throw new Error("Such category dosn`t exists")
    return productsClient.create({
        data: {
            name: body.name,
            amount: body.amount,
            price: body.price,
            category: body.category,
        }
    })
}

module.exports = {
    getProducts,
    addProduct,
    getProductById
}