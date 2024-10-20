import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-200 shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">
         TaskManager
          </Link>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-indigo-400 transition-colors duration-300">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-indigo-400 transition-colors duration-300">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
