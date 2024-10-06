import { createTask, getTasks } from '../api'; // API functions

// Fetch tasks from the API
export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await getTasks();
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAIL', payload: error.response.data });
  }
};

// Add a new task to the API
export const addTask = (taskData) => async (dispatch) => {
  try {
    const { data } = await createTask(taskData);
    dispatch({ type: 'ADD_TASK_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_TASK_FAIL', payload: error.response.data });
  }
};
