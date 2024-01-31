import React from 'react';
import {useState,useEffect} from 'react';

const Example2 = () => {
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0);
    var interval;
    useEffect(()=>{
         interval=setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds===60)
            {
                setMinutes(minutes+1);
                setSeconds(0);
            }
        },1000)
        return ()=>clearInterval(interval)
    },[seconds])
  return (
    <div>
        <h3>Example 2</h3>
         <h3>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h3>
         <button onClick={()=>{
            setSeconds(0);
            setMinutes(0);
         }}>Restart</button>
         <button onClick={()=>{
            clearInterval(interval)
         }}>Stop</button>
    </div>
  )
}

export default Example2