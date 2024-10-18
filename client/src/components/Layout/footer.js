import React from 'react';

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h4 className="text-lg font-semibold">Task Manager App</h4>
          <p className="text-sm">Manage your tasks efficiently and securely.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="/" className="text-sm hover:text-gray-400">Home</a>
          <a href="/about" className="text-sm hover:text-gray-400">About</a>
          <a href="/contact" className="text-sm hover:text-gray-400">Contact Us</a>
          <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} Task Manager App. All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
