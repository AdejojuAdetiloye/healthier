const express = require('express');
const SignUpUser = require('../controllers/signup-user');

const router = express.Router();

//all routes are here

//signup user
router.post('/signup',SignUpUser);

//export all routes as router
module.exports = router