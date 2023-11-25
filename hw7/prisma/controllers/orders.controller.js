const { Router } = require('express')
const service = require('../services/orders.service')

const router = new Router();

router.get('/',service.getOrders)
router.get('/:id',service.getOrdersById)
router.delete('/:id',service.deleteOrders)

module.exports = router;