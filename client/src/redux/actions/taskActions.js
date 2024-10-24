// import { CREATE_TASK_SUCCESS, CREATE_TASK_FAIL, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAIL } from './types';
// import { getTasks, createTask } from '../../api';

// export const fetchTasks = () => async (dispatch) => {
//     try {
//         const res = await getTasks();
//         dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
//     } catch (error) {
//         dispatch({ type: FETCH_TASKS_FAIL, payload: error.response.data.message });
//     }
// };

// export const createNewTask = (taskData) => async (dispatch) => {
//     try {
//         const res = await createTask(taskData);
//         dispatch({ type: CREATE_TASK_SUCCESS, payload: res.data });
//     } catch (error) {
//         dispatch({ type: CREATE_TASK_FAIL, payload: error.response.data.message });
//     }
// };


export const createTask = (task) => {
    return {
      type: 'CREATE_TASK',
      payload: { ...task, id: Date.now() }, 
    };
  };
  
