const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();
const User = require('../../models/User');

// user update, etc...

module.exports = router;
