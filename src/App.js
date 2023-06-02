import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post('/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTaskStatus = async (taskId) => {
    try {
      await axios.put(`/tasks/${taskId}/status`);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateStatus={updateTaskStatus} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
