
import './App.css';
import {useState,useEffect} from 'react';
function App() {
  
  const[percent,setPercent]=useState(0)
  
  useEffect(()=>{
    if(percent<100)
    {
      setTimeout(()=>{
        setPercent(percent+1)
      },200)
    }
  },[percent])
  return (
    <>
    <h1>Progress bar</h1>
    <div className="App1">
    <div className="progressbar">
      <div className="progressbarfill" style={{width:`${percent}%`}}>{percent}%</div>
    </div>
    </div>
    </>
  );
}

export default App;
