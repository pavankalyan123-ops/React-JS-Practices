import React,{useState,useRef} from 'react';

export default function Example4() {
  const[time,setTime]=useState({seconds:0,minutes:0,hours:0});
  const[isActive,setIsActive]=useState(false);
  let timer=useRef();
  function handleTime(){
     setIsActive(true);
     timer.current=setInterval(()=>{
       
       setTime((prev)=>{
         if(prev.seconds===60)
         {
           return {...prev,minutes:prev.minutes+1,seconds:0}
         }
         if(prev.minutes===60)
         {
           return {...prev,minutes:0,seconds:0,hours:prev.hours+1}
         }
         return {...prev,seconds:prev.seconds+1};
       });
       
     },100)
  }
  const handleStop=()=>{
    clearInterval(timer.current)
    setIsActive(false)
  }
  return (
    <div>
      <button onClick={()=>{handleTime()}} disabled={isActive}>Start</button>
      <button onClick={()=>{
        handleStop();
        }} disabled={!isActive}>Stop</button>
      <button onClick={()=>{
        setTime({hours:0,seconds:0,minutes:0});
        clearInterval(timer.current);
        setIsActive(false);
      }}>Reset</button>
      <h3>{time.hours<10?`0${time.hours}`:time.hours}:
      {time.minutes<10?`0${time.minutes}`:time.minutes}:
      {time.seconds<10?`0${time.seconds}`:time.seconds}</h3>
    </div>
  );
}
