const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    status: { type: String, enum: ['To Do', 'In Progress', 'Completed'], default: 'To Do' },
    dueDate: Date,
    assigned_User: String,
});

module.exports = mongoose.model('Task', taskSchema);
