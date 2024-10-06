import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Ensure this is correct
});



export const register = (formData) => API.post('/auth/register', formData);


export const login = (formData) => API.post('/auth/login', formData);


export const createTask = (taskData) => API.post('/tasks', taskData);


export const getTasks = () => API.get('/tasks'); 

