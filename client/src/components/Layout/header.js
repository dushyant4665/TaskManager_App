import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and close icons
import { motion } from 'framer-motion'; // Framer motion for animations

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-gray-200 shadow-lg fixed w-full z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-extrabold tracking-wide"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">
            TaskManager
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/login" className="hover:text-indigo-400 transition-colors duration-300">
              Login
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/register" className="hover:text-indigo-400 transition-colors duration-300">
              Register
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FiX size={28} className="text-white" />
            ) : (
              <FiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden bg-gray-800 text-gray-200 space-y-4 p-6 absolute top-16 left-0 w-full shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <Link
              to="/"
              className="block text-lg text-center hover:text-indigo-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-lg text-center hover:text-indigo-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="block text-lg text-center hover:text-indigo-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </li>
        </motion.ul>
      )}
    </header>
  );
};

export default Header;
