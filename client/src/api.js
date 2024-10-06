import axios from 'axios';

// Set up the base URL for your backend API
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Ensure this is correct
});


// Function to register a user
export const register = (formData) => API.post('/auth/register', formData);

// Function to login a user
export const login = (formData) => API.post('/auth/login', formData);

// Function to create a task
export const createTask = (taskData) => API.post('/tasks', taskData); // Ensure the correct endpoint

// Function to get tasks
export const getTasks = () => API.get('/tasks'); // Ensure the correct endpoint

