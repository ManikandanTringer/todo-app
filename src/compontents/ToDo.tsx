import React from 'react'
import {FC} from 'react'

import "../App.css"
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const ToDo :FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <div>
     
        <form className='input' onSubmit={handleAdd}>
            <input type="input" placeholder="Enter the Task" className="input_box" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="input_sumbit">Add</button>
        </form>

       
    

    </div>
  )
}

export default ToDo