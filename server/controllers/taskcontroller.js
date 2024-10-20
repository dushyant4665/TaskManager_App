const Task = require('../models/task');

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description, user: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get tasks' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { title, description }, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
