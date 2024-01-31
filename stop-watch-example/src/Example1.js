import React from 'react';
import { useState,useEffect,useRef } from 'react';

const Example1 = () => {
    const[timer,setTimer]=useState(0);
    useEffect(()=>{
        
        return()=>clearInterval(id.current)
    },[])
   const id=useRef();
    const handleStart=()=>{
        id.current=setInterval(()=>{
            setTimer(prev=>prev+1)
            console.log(timer)
        },1000)
    }
  return (
    <div>
        <h3>Example 1</h3>
        <h3>{timer}</h3>
        <button onClick={()=>handleStart()}>Start</button>
        <button onClick={()=>clearInterval(id.current)}>Pause</button>
        <button onClick={()=>{
            setTimer(0)
        }}>Reset</button>
    </div>
  )
}

export default Example1