const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);
router.get('/employees/random', EmployeeController.getRandom);
router.get('/employees/:id', EmployeeController.getOne);
router.post('/employees', EmployeeController.postAll);
router.put('/employees/:id', EmployeeController.updateOne);
router.delete('/employees/:id', EmployeeController.deleteOne);

module.exports = router;