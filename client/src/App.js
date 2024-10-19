import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Auth/home'; 
import Register from './components/Auth/register';
import Login from './components/Auth/login'; 
import Footer from './components/Layout/footer';
import Header from './components/Layout/header'; // Import the Header

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Render the Header at the top */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
