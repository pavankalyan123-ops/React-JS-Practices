import React from 'react';
import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Todo = () => {
    const[input,setInput]=useState('');
    const todo=useSelector(state=>state.todos.todo);
    const dispatch=useDispatch();
  return (
    <>
    <h1>Todo Example</h1>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={()=>{
        dispatch({type:"addTodo",payload:{name:input}})
        setInput('')
    }}>Add</button>
    {todo.map((td,index)=>(
        <div key={index}>
            {td}
        </div>
    ))}
    </>
  )
}

export default Todo