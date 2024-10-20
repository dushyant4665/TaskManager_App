import React, { useEffect, useState } from 'react';
import { getTasks, createTask } from '../api'; 
import TaskItem from './taskItem';  // Import TaskItem

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await getTasks();
                setTasks(data);
            } catch (error) {
                console.error('Failed to fetch tasks', error);
            }
        };

        fetchTasks();
    }, []);

    const handleCreateTask = async (taskData) => {
        try {
            await createTask(taskData);
            
        } catch (error) {
            console.error('Failed to create task', error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} />  // Use TaskItem to render each task
                ))}
            </ul>
        </div>
   );
};
export default TaskList;
