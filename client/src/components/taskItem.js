import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Create one to get started.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <Link to={`/tasks/${task.id}`} className="text-indigo-500 hover:underline">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
