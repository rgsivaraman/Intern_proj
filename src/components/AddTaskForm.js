import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
