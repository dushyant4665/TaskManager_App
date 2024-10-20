import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Auth/home'; 
import Register from './components/Auth/register';
import Login from './components/Auth/login'; 
import Footer from './components/Layout/footer';
import Header from './components/Layout/header'; 
import TaskForm from './components/taskForm'; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/create-task" element={<TaskForm />} /> 
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
