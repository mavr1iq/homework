const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/',controller.getProduct);
router.post("/",controller.addProduct);
router.get('/:id',controller.getProductById);

module.exports = router;