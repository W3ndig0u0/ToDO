import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import './App.css';


function App() {
  // !todo är alla todo och setTodo är functionen för att uppdatera todos
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const localStorageKey = "todoApp.todos"

  // !random number generator
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // !Ta allt från local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (setTodos) setTodos(storedTodos)
    }, [])

  // !om något i arrayen ändras startas UseEffect
  // !Spara allt i local_storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    let randomNr = getRandomInt(1, 10000000);
    
    if (name === ("")) {
      return
    }
    
    setTodos(prevTodo =>{
      return [...prevTodo, {id : randomNr, name : name, complete: false}]
      })
      
    todoNameRef.current.value = null;
  }

  function handleClearTodo(){
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function toDoHtml(){
    if (todos.length == 0) {
      console.log(todos);
      return ( <p> 0 ToDo's Left! :D</p> )
    } else {
      return (
      <>
        <p> {todos.filter(todo => !todo.complete).length} ToDo's Left</p>
        <hr></hr>
        <ToDoList todos = { todos } toggleTodo = { toggleTodo }/> 
      </>)
    }
  }


  return(
  <>

    
    <h2>W3ndig0u0's ToDo</h2>
      <div className="group">      
        <input ref= {todoNameRef} required type="text" className="TextInput"/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="textLabel">Write Next ToDo</label>
      </div>

      <button onClick = { handleAddTodo } className="addToDo">Add ToDo</button>
      <button onClick = { handleClearTodo } className="clearToDo">Clear ToDo</button>

      <div className ="todoList" >
        {toDoHtml()}
      </div>

  </>
  )
}

export default App;