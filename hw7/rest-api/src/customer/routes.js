const { Router } = require("express")
const controller = require("./controller")

const router = Router();

router.get("/:id/orders",controller.getTotalCost)

module.exports = router;