import React,{useState,useEffect} from 'react'

const Example1 = () => {
    const[startGame,setStartGame]=useState(false);
    const[finishedGame,setFinishedGame]=useState(false);
    const[score,setScore]=useState(0);
    const[timeLeft,setTimeLeft]=useState(15);
  const[color,setColor]=useState("red");
    const handleStartGame=()=>{
        setStartGame(true);
        setFinishedGame(false);
        setScore(0);
        setTimeLeft(15)
    }
    useEffect(()=>{
        if(startGame && !finishedGame && timeLeft>0){
            setTimeout(()=>{
                setTimeLeft(timeLeft-1)
            },1000)
        }
        else if(timeLeft===0)
        {
            setFinishedGame(true)
        }
       
    },[timeLeft,startGame,finishedGame])
    useEffect(()=>{
        let intervalId=setInterval(()=>{
             setColor(color==="red"?"green":"red");
        },Math.floor(Math.random()*1000)+1000)
        return ()=>clearInterval(intervalId);
    },[color])
    const handleClick=()=>{
       if(color==="green" && score===14){
        setScore(score+1);
       }else if(color==="green"){
        setScore(score+1);
       }else{
        setFinishedGame(true)
       }
    }
    const handleKeyDown=(e)=>{
        e.preventDefault();
       if(e.key==="Enter")
       {
        console.log("entering ")
        handleClick();
       }
    }
    
  return (
    <div>
       {(!startGame || finishedGame ) && <> <button onClick={handleStartGame}>Start Game</button></>}
       {startGame && !finishedGame && <> 
       <h3>Time Left: {timeLeft}s</h3>
        {finishedGame && "__ Game over"}
        </>}
       <h1>Score: {score}</h1>
       {(startGame && !finishedGame) && <>
         <button autoFocus onClick={handleClick} onKeyDown={handleKeyDown} style={{...divStyle,backgroundColor:color}}></button>
       </>}
       {finishedGame && <h3>{score<15?"..Game over!":"You win!"}</h3>}
    </div>
  )
}

export default Example1;

const divStyle={
    height:"200px",
    width:"200px",
    border:"1px solid black",
    marginLeft:"45%"
}