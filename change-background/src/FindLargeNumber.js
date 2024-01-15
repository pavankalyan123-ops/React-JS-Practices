import React from 'react';
import {useState} from 'react';

const FindLargeNumber = () => {
    const[input,setInput]=useState('');
    const[LargeNumber,setLargeNumber]=useState(null);
    
    const findLarge=()=>{
       let arr=input.split(',').map(Number);
       let large=Math.max(...arr);
       setLargeNumber(large);
    }
  return (
    <>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={findLarge}>Get Largest</button>
      <h3>{input&&LargeNumber!==null?(LargeNumber&&`The largest number is : ${LargeNumber}`):""}</h3>
    </>
  )
}

export default FindLargeNumber