const express = require('express');
const { getTasks, createTask } = require('./controllers/taskController')
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);


console.log(typeof register); 
console.log(typeof login);


module.exports = router;


