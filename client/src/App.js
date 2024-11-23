


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Auth/home';
import Register from './components/Auth/register';
import Login from './components/Auth/login';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import TaskItem from './components/taskItem';
import Header from './components/Layout/header';
import Footer from './components/Layout/footer';

const App=()=>{
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/"element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/tasks" element={<TaskList />} /> 
              <Route path="/tasks/:id"element={<TaskItem />} />
           
            </Routes>
          </main>
        <Footer /> 
        </div>
      </Router>
    </Provider>
  );
};

export default App;

