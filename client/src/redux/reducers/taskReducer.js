// import { CREATE_TASK_SUCCESS, CREATE_TASK_FAIL, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAIL } from '../actions/types';

// const initialState = {
//     tasks: [],
//     error: null,
// };

// export const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_TASKS_SUCCESS:
//             return { ...state, tasks: action.payload, error: null };
//         case FETCH_TASKS_FAIL:
//             return { ...state, error: action.payload };
//         case CREATE_TASK_SUCCESS:
//             return { ...state, tasks: [...state.tasks, action.payload], error: null };
//         case CREATE_TASK_FAIL:
//             return { ...state, error: action.payload };
//         default:
//             return state;
//     }
// };

// const initialState = [];

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CREATE_TASK':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default taskReducer;

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
