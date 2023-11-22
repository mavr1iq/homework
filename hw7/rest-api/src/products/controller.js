const pool = require("../../db")
const queries = require("./queries")
const getProduct = (req,res) =>{
    pool.query(queries.getProducts,(error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
};
const getProductById = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getProductsById,[id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}
const addProduct = (req,res) =>{
    const { name ,amount, price, category } = req.body;
    pool.query(queries.checkCategory, [category],(error,results) =>{
        if (results === undefined){
            res.status(403).send("Invalid product category")
        }
        pool.query(queries.addProduct, [name ,amount, price, category],(error, results) =>{
            if (error) throw error;
            res.status(201).json(results.rows)
        });
    });

}

module.exports = {
    getProduct,
    getProductById,
    addProduct,
};