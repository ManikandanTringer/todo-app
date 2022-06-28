import React, { FC, useEffect, useRef, useState } from 'react'
import {ToDoParameter} from "../property"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDownloadDone} from "react-icons/md"
import "../App.css"
import ToDo from './ToDo'
import ToDoList from './ToDoList'

type Props={
    todo: ToDoParameter,     
    todos:ToDoParameter[],
    setTodos:React.Dispatch<React.SetStateAction<ToDoParameter[]>>
}

const NewToDo:FC<Props> = ({todo,todos,setTodos}) => {

    const [edit,setEdit]=useState<boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todo.todo)
const handleDone=(id:number)=>{
    setTodos(todos.map(todo=>todo.id === id?{...todo,isDone:!todo.isDone}:todo))
}

const handleDelete=(id:number)=>{
        setTodos(todos.filter(todo => todo.id !==id))
}
const handleEdit=(e:React.FormEvent<HTMLFormElement>,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(todo.id===id ? {...todo,todo:editTodo}:todo)))
    setEdit(false);
}

const inputRef=useRef<HTMLInputElement>(null)
useEffect(()=>{
    inputRef.current?.focus();
},[edit])

  return (
    <form className="todos__new" onSubmit={(e)=>handleEdit(e,todo.id)} >

        {
            edit ? (
                <input value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} ref={inputRef} className="todos__new--text"/>
            ):(
                todo.isDone ?( <s className="todos__new--text">{todo.todo}</s> ):(<span className="todos__new--text">{todo.todo}</span>)
            )

        }



        
        
        <div>
            <span className="icon" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }}
            }><AiFillEdit /></span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}><MdDownloadDone /></span>
        </div>
    </form>
  )
}

export default NewToDo