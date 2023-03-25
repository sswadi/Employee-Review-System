const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.get('/sign-up', employeeController.signUp); //check /sign-up??
router.get('/sign-in', employeeController.signIns);

module.exports = router;