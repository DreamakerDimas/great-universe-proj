const express = require('express');
const router = express.Router();

const checkToken = require('../../middleware/checkToken');
const { getUser } = require('../../controllers/userController');

// @route   GET api/users/getUser
// @desk    Get user by ID in token
// @access  Public
router.get('/getUser', checkToken, getUser);

// user update, etc...

module.exports = router;
