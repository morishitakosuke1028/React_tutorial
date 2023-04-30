import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleId }) => {
  return todos.map((todo) => 
    <Todo todo={todo} key={todo.id} toggleId={toggleId} />
  );
}

export default TodoList