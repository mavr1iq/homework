const checkCustomerId = 'SELECT * FROM "Customer" WHERE id = $1'
const getDeliveryCost = {
    text: 'SELECT id, delivery_cost FROM "Orders" WHERE id = $1',
    rowMode: 'array'
}
const getOrderInfo = {
    text: 'SELECT product_id, order_amount FROM "OrdersProducts" WHERE order_id = $1',
    rowMode: 'array'
}
const getProductPrice = {
    text: 'SELECT price FROM "Products" WHERE id = $1',
    rowMode: 'array'
}
const getOrder = 'SELECT * FROM "Orders" WHERE id = $1'

module.exports = {
    checkCustomerId,
    getDeliveryCost,
    getOrderInfo,
    getProductPrice,
    getOrder
}