import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import { motion } from 'framer-motion'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-black to-indigo-900 text-gray-100 shadow-lg fixed w-full z-20">
      <nav className="container mx-auto p-5 flex justify-between items-center">
  
        <motion.div
          className="text-4xl font-extrabold tracking-wider text-indigo-400"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Link to="/" className="hover:text-white transition-all duration-300">
            Task<span className="text-white">Manager</span>
          </Link>
        </motion.div>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <motion.li
            whileHover={{ scale: 1.2, color: "#c084fc" }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="hover:text-indigo-300 transition-all duration-300">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: "#c084fc" }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/login" className="hover:text-indigo-300 transition-all duration-300">
              Login
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: "#c084fc" }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/register" className="hover:text-indigo-300 transition-all duration-300">
              Register
            </Link>
          </motion.li>
        </ul>

   
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FiX size={28} className="text-white transition-transform transform hover:rotate-180 duration-500" />
            ) : (
              <FiMenu size={28} className="text-white transition-transform transform hover:rotate-90 duration-500" />
            )}
          </button>
        </div>
      </nav>


      {isOpen && (
        <motion.ul
          className="md:hidden bg-gray-900 text-gray-200 space-y-6 p-6 absolute top-16 left-0 w-full shadow-lg z-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.li
            whileHover={{ scale: 1.1, color: "#c084fc" }}
            className="border-b border-gray-700 pb-2"
          >
            <Link
              to="/"
              className="block text-xl text-center hover:text-indigo-400 transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "#c084fc" }}
            className="border-b border-gray-700 pb-2"
          >
            <Link
              to="/login"
              className="block text-xl text-center hover:text-indigo-400 transition-all duration-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "#c084fc" }}
          >
            <Link
              to="/register"
              className="block text-xl text-center hover:text-indigo-400 transition-all duration-300"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </motion.li>
        </motion.ul>
      )}
    </header>
  );
};

export default Header;
