import React from 'react';
import{useNavigate}from'react-router-dom';

const Home=()=>{
  const navigate=useNavigate();

  const handleCreateTask=()=>{
    navigate('/create-task'); 
  };

  const handleViewTasks=()=>{
    navigate('/tasks'); 
  };

  const handleViewTaskItem=()=>{
    navigate('/tasks/1'); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-600 via-black to-gray-500 text-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">TaskManager</h1>
        <p className="mt-4 text-lg text-gray-100">
          Stay on top of your tasks and achieve more with simplicity and efficiency.
          Be disciplined.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={handleCreateTask}
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          Create New Task
        </button>

        <button
          onClick={handleViewTasks}
          className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-600 transition duration-300 transform hover:scale-105"
        >
          View All Tasks
        </button>

        <button
          onClick={handleViewTaskItem}
          className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-600 transition duration-300 transform hover:scale-105"
        >
          View Task Details (Example Task)
        </button>
      </div>

      <footer className="absolute bottom-4 text-center text-sm text-gray-200">
        <p>© 2024 Dushyant Khandelwal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
