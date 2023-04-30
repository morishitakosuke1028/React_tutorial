import React from 'react'

const Todo = ({ todo, toggleId }) => {
  const handleTodoClick = () => {
    toggleId(todo.id);
  };
  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo