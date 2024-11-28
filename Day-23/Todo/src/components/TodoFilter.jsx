import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
