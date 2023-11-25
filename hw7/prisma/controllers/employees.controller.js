const { Router } = require('express');
const service = require('../services/employees.service');

const router = Router();

router.get("/",service.getEmployees);
router.get('/:id',service.getEmployeesById);
router.patch('/:id',service.patchEmployees);

module.exports = router;