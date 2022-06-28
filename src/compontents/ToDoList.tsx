import React,{FC} from 'react'
import { ToDoParameter } from "../property"
import "../App.css"
import NewToDo from './NewToDo'

interface Props{
    todos:ToDoParameter[],
    setTodos:React.Dispatch<React.SetStateAction<ToDoParameter[]>>
}
const ToDoList: FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos-list'>
        {
            todos.map(todo=>(
                <NewToDo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            ))
        }
    </div>
  )
}

export default ToDoList