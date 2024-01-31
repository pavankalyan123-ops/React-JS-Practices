import React,{useState,useEffect} from 'react'

const Example3 = () => {
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[isActive,setIsActive]=useState(false);

    useEffect(()=>{
        let timer;
        if(isActive)
        {
            timer=setInterval(()=>{

//  // Update seconds
//  setSeconds((prev) => (prev < 10 ? prev + 1 : 0));

//  // Update minutes when seconds reach 0
//  if (seconds === 10) {
//    setMinutes((prevMinutes) => prevMinutes + 1);
//  }

                setSeconds((prev)=>{
                    if(prev<59)
                    {
                        return prev+1;
                    }else{
                        return 0;
                    }
                })
                if(seconds===59)
                {
                    setMinutes((prev)=>prev+1)
                }
            },1000)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[isActive])

    const handleStart=()=>{
        setIsActive(true);
    }
    const handleStop=()=>{
        setIsActive(false)
    }
    const handleReset=()=>{
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
    }
  return (
    <div>
       <h3>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</h3>
       <button onClick={handleStart} disabled={isActive}>Start</button>
       <button onClick={handleStop} disabled={!isActive}>Stop</button>
       <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Example3