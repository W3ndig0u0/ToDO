import React from 'react';
import ToDoList from './ToDoList';

function App() {
  return(
  <>
    <ToDoList />
      <input type="text" className="TextInput"/>
      <button className="btn addToDo">Add ToDo</button>
      <button className="btn clearToDo">Clear ToDo</button>
      <p>0 To do left</p>
  </>
  )
}

export default App;