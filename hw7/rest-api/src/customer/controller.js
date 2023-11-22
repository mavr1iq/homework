const pool = require("../../db")
const queries = require("./queries")
const e = require("express");

const getTotalCost = (req,res) =>{
    const id = parseInt(req.params.id)
    let deliveryCost;
    let productPrice;
    let quantity;
    let orderId;
    let productId;
    pool.query(queries.checkCustomerId, [id], (error, results) =>{
        if(!results) res.status(404).send("Customer with such ID doesn`t exists")
        else if(error) throw error
        pool.query(queries.getDeliveryCost, [id] ,(error, results) =>{
            if(error) throw error
            deliveryCost = parseFloat(results.rows[0][1])
            orderId = results.rows[0][0]
            if (!orderId) res.status(404).send("This customer has no orders")
            pool.query(queries.getOrderInfo, [orderId], (error, results) =>{
                if (error) throw error
                productId = results.rows[0][0]
                quantity = parseFloat(results.rows[0][1])
                if (!productId) res.status(404).send("Orders with such product doesn`t exists")
                pool.query(queries.getProductPrice, [productId], (error, results) =>{
                    if(error) throw error
                    productPrice = parseFloat(results.rows[0][0])
                    pool.query(queries.getOrder, [orderId], (error, results) =>{
                        if(error) throw error
                        const totalPrice = (quantity * productPrice) + deliveryCost
                        res.status(200).json({"orders": results.rows, "totalCost": totalPrice})
                    })
                })
            })
        })
    })
}

module.exports = {
    getTotalCost,
}