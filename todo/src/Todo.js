import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  function HandleTodoClick(){
    toggleTodo(todo.id);
  }

  return (
      <label className="tasks">
        <input className="checkbox" type="checkbox" checked={todo.complete} onChange={HandleTodoClick} />
        <span class="checkmark"></span>
          <span className="taskText" >
            Task = { todo.name }
          </span>
      </label>
  )
}
