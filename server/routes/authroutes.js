const express = require('express');
const { registerUser, loginUser } = require('../controllers/authcontroller'); // Make sure this path is correct
const router = express.Router();

// Define routes
router.post('/register', registerUser); // Ensure registerUser is defined and imported correctly
router.post('/login', loginUser); // Ensure loginUser is defined and imported correctly

console.log('registerUser:', registerUser);
console.log('loginUser:', loginUser);


module.exports = router;
