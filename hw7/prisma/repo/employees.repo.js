const { PrismaClient } = require("@prisma/client")

const employeesClient = new PrismaClient().employee

const getEmployees = () =>{
    return employeesClient.findMany({})
}
const getEmployeesById = async(id) =>{
    const result = await employeesClient.findUnique({
        where: {
            id: id
        }
    })
    if (!result) throw new Error("Employee with such id doesn't exists")
    return result
}
const patchEmployees = async(id,body) =>{
    await getEmployeesById(id)
    return employeesClient.update({
        where: {
            id: id
        },
        data: {
            first_name: body.first_name,
            middle_name: body.middle_name,
            last_name: body.last_name,
            position: body.position
        }
    })
}

module.exports = {
    getEmployees,
    getEmployeesById,
    patchEmployees
}