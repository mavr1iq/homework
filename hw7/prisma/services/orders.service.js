const ordersRepo = require('../repo/orders.repo')

const getOrders = async (req,res) =>{
    try{
        const result = await ordersRepo.getOrders()
        res.status(200).json(result);
    }catch (error){res.status(400).send(error.message)}
}
const getOrdersById = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const result = await ordersRepo.getOrdersById(id)
        res.status(200).json(result)
    }catch (error) {res.status(404).send(error.message)}
}
const deleteOrders = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const result = await ordersRepo.deleteOrders(id)
        res.status(200).json(result)
    }catch (error) {res.status(404).send(error.message)}
}

module.exports = {
    getOrders,
    getOrdersById,
    deleteOrders
}