// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { authReducer } from './reducers/authReducer';  // Ensure this file exists in /src/redux/reducers
// import { taskReducer } from './reducers/taskReducer'; // Task reducer

// // Combine all reducers
// const rootReducer = combineReducers({
//   auth: authReducer,  // Authentication state
//   tasks: taskReducer, // Task state
// });

// // Create Redux store
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)) // Apply middleware (e.g., thunk)
// );

// export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';  // Default import
import taskReducer from './reducers/taskReducer';  // Default import

const rootReducer = combineReducers({
  auth: authReducer,  // Ensure these match exactly
  tasks: taskReducer,  // Ensure these match exactly
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
