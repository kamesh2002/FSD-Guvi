import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.name || !newTodo.description) {
      alert('Please provide both name and description.');
      return;
    }
    addTodo(newTodo);
    setNewTodo({ name: '', description: '', status: 'Not Completed' });
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={newTodo.name}
        onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={newTodo.description}
        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
