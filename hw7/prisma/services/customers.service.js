const customersRepo = require('../repo/customers.repo')

const getCustomers = async(req,res) =>{
    try {
        const result = await customersRepo.getCustomers();
        res.status(200).json(result)
    }catch (error){res.status(400).send(error.message)}
}
const getCustomersById = async(req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await customersRepo.getCustomersById(id);
        res.status(200).json(result)
    }catch (error){res.status(404).send(error.message)}
}
const getTotalCost = async(req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await customersRepo.totalCost(id);
        res.status(200).json(result)
    }catch (error){res.status(404).send(error.message)}
}

module.exports = {
    getCustomers,
    getCustomersById,
    getTotalCost
}