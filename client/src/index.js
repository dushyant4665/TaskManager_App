// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Make sure this path is correct
// import App from './App'; // Import the main App component
// import './index.css'; // Your global CSS

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />  {/* Render the App component here */}
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')  // Ensure this matches the "root" element in your HTML
// );

import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import App from './App';
import './index.css';  // Import global styles if any

const container = document.getElementById('root');
const root = createRoot(container);  // Create root using React 18 API

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);