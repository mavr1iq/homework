const getProducts = 'SELECT * FROM "Products"';
const getProductsById = 'SELECT * FROM "Products" WHERE id = $1';
const addProduct = 'INSERT INTO "Products" (name ,amount, price, category) VALUES ($1, $2, $3, $4) RETURNING *';
const checkCategory = 'SELECT row FROM "Products" row WHERE row.category = $1'

module.exports = {
    getProducts,
    getProductsById,
    addProduct,
    checkCategory,
}