// import React, { useState } from 'react';
// import { createTask } from '../api';

// const TaskForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     priority: 'Medium',
//     status: 'To Do',
//     dueDate: '',
//     assigned_User: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createTask(formData);
//     } catch (error) {
//       console.error('Task creation failed', error);
//     }
//   };

//   return (
//     <form
//       className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a New Task</h2>

//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="title">
//           Task Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter Task Title"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="assignedUser">
//           Assigned To
//         </label>
//         <input
//           type="text"
//           id="assignedUser"
//           placeholder="Assign to User"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           onChange={(e) => setFormData({ ...formData, assigned_User: e.target.value })}
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="description">
//           Task Description
//         </label>
//         <textarea
//           id="description"
//           placeholder="Describe the task"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//         ></textarea>
//       </div>

//       <div className="flex space-x-4 mb-6">
//         <div className="w-1/3">
//           <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="priority">
//             Priority
//           </label>
//           <select
//             id="priority"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>

//         <div className="w-1/3">
//           <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="status">
//             Status
//           </label>
//           <select
//             id="status"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//           >
//             <option value="To Do">To Do</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>

//         <div className="w-1/3">
//           <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="dueDate">
//             Due Date
//           </label>
//           <input
//             type="date"
//             id="dueDate"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
//       >
//         Create Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;


import React, { useState } from 'react';
import { createTask } from '../api'; // API function to handle task creation

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'To Do',
    dueDate: '',
    assigned_User: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(formData); // API call to create task
    } catch (error) {
      console.error('Task creation failed', error);
    }
  };

  return (
    <form
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a New Task</h2>

      {/* Task Title */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="title">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter Task Title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      {/* Assigned User */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="assignedUser">
          Assigned To
        </label>
        <input
          type="text"
          id="assignedUser"
          placeholder="Assign to User"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.assigned_User}
          onChange={(e) => setFormData({ ...formData, assigned_User: e.target.value })}
        />
      </div>

      {/* Task Description */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="description">
          Task Description
        </label>
        <textarea
          id="description"
          placeholder="Describe the task"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
      </div>

      {/* Priority, Status, and Due Date */}
      <div className="flex space-x-4 mb-6">
        {/* Priority */}
        <div className="w-1/3">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-1/3">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="w-1/3">
          <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
