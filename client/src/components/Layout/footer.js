import React from 'react';

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-gray-200 py-8">
      // <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      //   <div className="mb-6 sm:mb-0 text-center sm:text-left">
      //     <h4 className="text-xl font-bold">Task Manager Pro</h4>
      //     <p className="text-sm mt-2 text-gray-400">Manage your tasks efficiently and securely.</p>
      //   </div>
      //   <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
      //     <a href="/" className="text-sm hover:text-indigo-400 transition-colors duration-300">Home</a>
      //     <a href="/about" className="text-sm hover:text-indigo-400 transition-colors duration-300">About</a>
      //     <a href="/contact" className="text-sm hover:text-indigo-400 transition-colors duration-300">Contact Us</a>
      //     <a href="/privacy" className="text-sm hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
      //   </div>
      // </div>
      // <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
      //   © {new Date().getFullYear()} Task Manager Pro. All rights reserved.
      // </div>
    <div className="w-full bg-gray-900 p-4 flex justify-center md:justify-end items-center">
  <p className="text-sm text-white text-center md:text-right">
    Technologies used: React.js, TailwindCSS, MongoDB, Hcaptcha, framer motion
  </p>
</div>
    // </footer>
  );
};

export default Footer;
