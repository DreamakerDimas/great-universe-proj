const express = require('express');

const userController = require('../../controllers/userController');
const checkToken = require('../../middleware/checkToken');
const getAuthToken = require('../../middleware/getAuthToken');
const config = require('config');

const User = require('../../models/User');
const router = express.Router();

// @route   GET api/auth/getUser
// @desk    Get user by checked token
// @access  Public
router.get('/getUser', checkToken, userController.getUser);

// @route   POST api/auth/login
// @desk    Authenticate user & get token
// @access  Public
router.post('/login', userController.loginUser, getAuthToken);

// @route   POST api/users
// @desk    Register user
// @access  Public
router.post('/register', userController.registerUser, getAuthToken);

// validation need

module.exports = router;
