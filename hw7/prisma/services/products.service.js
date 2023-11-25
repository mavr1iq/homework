const productsRepo = require("../repo/products.repo")

const getProducts = async(req,res)=>{
    try {
        const result = await productsRepo.getProducts()
        res.json(result)
    }catch (error){console.log(error)}
}
const getProductById = async(req,res)=>{
    try {
        const id = parseInt(req.params.id)
        const result = await productsRepo.getProductById(id)
        res.status(200).json(result)
    }catch (error){res.status(400).send(error.message)}
}
const addProduct = async(req,res)=>{
    try{
        const body = req.body;
        const result = await productsRepo.addProduct(body)
        res.status(201).json(result)
    }catch (error){res.status(403).send(error.message)}
}

module.exports = {
    getProducts,
    addProduct,
    getProductById
}