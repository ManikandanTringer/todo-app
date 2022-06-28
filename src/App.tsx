import React, { useState } from 'react';
import ToDo from './compontents/ToDo';
import ToDoList from './compontents/ToDoList';
import './App.css';
import { ToDoParameter } from './property';

function App() {
    const [todo,setTodo]=useState<string>("")
    const [todos,setTodos]=useState<ToDoParameter[]>([])
    console.log(todo)

    const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault();
        if(todo){
        setTodos([...todos,{id:Date.now(), todo: todo, isDone:false  }])
        setTodo("")
      }
    };
    console.log(todos)


  return (
    <div className="App"> 
      <header className="App-header">
       Things To Do
      </header>
      <ToDo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} /> 
    </div>
  );
}

export default App;
