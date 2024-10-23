// client/src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer'; // Make sure authReducer is a function

const rootReducer = combineReducers({
  tasks: taskReducer,  // taskReducer should be a function
  auth: authReducer,   // authReducer should be a function
});

export default rootReducer;
