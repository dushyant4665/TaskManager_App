const express = require('express');
const { createTask, getTasks } = require('../controllers/taskcontroller');
const router = express.Router();

// Create a task
router.post('/', createTask);

// Get all tasks
router.get('/', getTasks);

module.exports = router;
