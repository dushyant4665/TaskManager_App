import './index.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

function App() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <Provider store={store}>
      <div>
        <nav>
          <button onClick={() => setCurrentView('login')}>Login</button>
          <button onClick={() => setCurrentView('register')}>Register</button>
          <button onClick={() => setCurrentView('tasks')}>Tasks</button>
          <button onClick={() => setCurrentView('create-task')}>Create Task</button>
        </nav>
        {currentView === 'login' && <Login />}
        {currentView === 'register' && <Register />}
        {currentView === 'tasks' && <TaskList />}
        {currentView === 'create-task' && <TaskForm />}
      </div>
    </Provider>
  );
}
export default App;
