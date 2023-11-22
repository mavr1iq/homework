const getOrders = 'SELECT * FROM "Orders"'
const getOrdersById = 'SELECT * FROM "Orders" WHERE id = $1'
const deleteOrdersById = 'DELETE FROM "Orders" WHERE id = $1 RETURNING *'
const alterSequence = 'ALTER SEQUENCE "Orders_id_seq" RESTART WITH $1'
const checkId = 'SELECT row FROM "Orders" row WHERE row.id = $1'

module.exports = {
    getOrders,
    getOrdersById,
    deleteOrdersById,
    alterSequence,
    checkId,
}