const employeesRepo = require("../repo/employees.repo")

const getEmployees = async(req,res) =>{
    try{
        const result = await employeesRepo.getEmployees();
        console.log(result)
        res.status(200).json(result)
    }catch (error){res.status(400).send(error.message)}
}
const getEmployeesById = async(req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const result = await employeesRepo.getEmployeesById(id)
        res.status(200).json(result)
    }catch (error){res.status(404).send(error.message)}
}
const patchEmployees = async(req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const body = req.body
        const result = await employeesRepo.patchEmployees(id,body)
        res.status(200).json(result)
    }catch (error){res.status(404).send(error.message)}
}

module.exports = {
    getEmployees,
    getEmployeesById,
    patchEmployees
}