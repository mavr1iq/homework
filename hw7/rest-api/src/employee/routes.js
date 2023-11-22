const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.patch("/:id",controller.patchEmployee);
router.get("/:id", controller.getEmployeeById);

module.exports = router;