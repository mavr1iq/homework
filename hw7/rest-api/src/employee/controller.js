const pool = require('../../db')
const queries = require("./queries")

const patchEmployee = (req,res) =>{
    const id = parseInt(req.params.id);
    const { first_name, middle_name, last_name, position } = req.body
    pool.query(queries.getEmployeeById, [id], (error, results) =>{
        if (!results.rows.length) res.status(404).send("Employee with such ID not found")
        else if (error) throw error
        pool.query(queries.patchEmployee, [id,first_name,middle_name,last_name,position], (error, results) =>{
            if(error) throw error
            res.status(200).json(results.rows)
        })
    })
}
const getEmployeeById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getEmployeeById, [id], (error, results) =>{
        if (!results.rows.length) res.status(404).send("Employee with such ID not found")
        else if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    patchEmployee,
    getEmployeeById,

}