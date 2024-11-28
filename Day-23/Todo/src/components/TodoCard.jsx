import React from 'react';

const TodoCard = ({ todo, editTodo, deleteTodo }) => {
  const handleEdit = () => {
    const newName = prompt('Edit Task Name:', todo.name);
    const newDescription = prompt('Edit Description:', todo.description);
    if (newName && newDescription) {
      editTodo(todo.id, { ...todo, name: newName, description: newDescription });
    }
  };

  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <div className="todo-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <select
          value={todo.status}
          onChange={(e) => editTodo(todo.id, { ...todo, status: e.target.value })}
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TodoCard;
