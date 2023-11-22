const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/',controller.getOrders);
router.get('/:id',controller.getOrdersById);
router.delete('/:id',controller.deleteOrdersById);

module.exports = router;