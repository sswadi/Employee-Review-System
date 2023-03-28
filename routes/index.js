const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeeController = require('../controllers/employeeController');

router.get('/sign-up', employeeController.signUp); //check /sign-up??
router.get('/sign-in', employeeController.signIns);

// router.post('/create', employeeController.create); //need to create this function

// use passport as a middleware to authenticate 
router.post('/employee/sign-in', passport.authenticate('local', {failureRedirect: '/user/sign-in'}, ),employeeController.createSession);

module.exports = router;