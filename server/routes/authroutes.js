const express = require('express');
const { register, login } = require('../controllers/authController');
const verifyCaptcha = require('../config/captcha');

const router = express.Router();

router.post('/register', verifyCaptcha, register);
router.post('/login', verifyCaptcha, login);

module.exports = router;
