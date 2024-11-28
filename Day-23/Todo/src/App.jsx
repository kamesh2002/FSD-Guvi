import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Completed') return todo.status === 'Completed';
    if (filter === 'Not Completed') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
