const express = require('express');
const { getTasks, createTask } = require('./controllers/taskController'); // Corrected path
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);

module.exports = router;
