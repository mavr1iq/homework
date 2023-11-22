const pool = require('../../db')
const queries = require('./queries')

const getOrders = (req,res) => {
    pool.query(queries.getOrders, (error, results) =>{
       if(error) throw error
        res.status(200).json(results.rows)
    })
};
const getOrdersById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getOrdersById, [id],(error, results) =>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const deleteOrdersById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.checkId, [id], (error,results) =>{
        if (!results.rows.length) {
            res.status(404).send("Order with such id not found")
        }
        pool.query(queries.deleteOrdersById, [id], (error,results) =>{
            if(error) throw error
            pool.query(queries.alterSequence, [id], (error, results) =>{})
            res.status(200).json(results.rows)
        })
    })
}

module.exports = {
    getOrders,
    getOrdersById,
    deleteOrdersById,
}