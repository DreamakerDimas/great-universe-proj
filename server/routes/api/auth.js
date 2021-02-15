const express = require('express');
const router = express.Router();

const { login, register } = require('../../controllers/authController');
const getAuthToken = require('../../middleware/getAuthToken');

// @route   POST api/auth/login
// @desk    Authenticate user & get token
// @access  Public
router.post('/login', login, getAuthToken);

// @route   POST api/users
// @desk    Register user & get token
// @access  Public
router.post('/register', register, getAuthToken);

// validation needed

module.exports = router;
