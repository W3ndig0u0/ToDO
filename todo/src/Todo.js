import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  function HandleTodoClick(){
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={HandleTodoClick} />
        Task = { todo.name }
        -
        Id = { todo.id}
      </label>
    </div>
  )
}
