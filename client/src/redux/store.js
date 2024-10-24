// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import authReducer from './reducers/authReducer';  
// import taskReducer from './reducers/taskReducer';  

// const rootReducer = combineReducers({
//   auth: authReducer,  
//   tasks: taskReducer,  
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
// );

// export default store;


// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // Optional for Redux DevTools
// import rootReducer from './reducers/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
