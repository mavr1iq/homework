const { Router } = require('express');
const service = require('../services/customers.service')

const router = Router();

router.get('/',service.getCustomers);
router.get('/:id'/service.getCustomersById);
router.get('/:id/orders',service.getTotalCost);

module.exports = router;