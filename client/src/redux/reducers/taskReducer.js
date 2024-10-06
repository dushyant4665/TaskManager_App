const initialState = {
  tasks: [],
  error: null,
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'FETCH_TASKS_FAIL':
    case 'ADD_TASK_FAIL':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
