const { Router } = require('express');
const service = require('../services/products.service')

const router = Router();

router.get('/', service.getProducts);
router.post("/",service.addProduct);
router.get('/:id',service.getProductById);

module.exports = router;