import React,{useState,useRef} from 'react';
import './App.css';

let data=["","","","","","","","",""]
function App() {
  const[count,setCount]=useState(0);
  const[lock,setLock]=useState(false);
   const titleRef=useRef(null)
  const toggle=(e,num)=>{
     if(lock)
     {
       return 0;
     }
     if(count%2===0)
     {
        e.target.innerHTML="X";
        data[num]="X";
        setCount(count+1)
     }else{
       e.target.innerHTML="O";
       data[num]="O";
       setCount(count+1)
     }
     checkwin();
  }
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      win(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      win(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      win(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      win(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      win(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      win(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      win(data[3]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      win(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      win(data[2]);
    } else if (count === 8) {
      console.log("count value",count);
      console.log(data==="X");
      win("hello");
    }
  };
  
  const win=(winner)=>{
     
       setLock(true);
       if(winner==="X")
       {
        console.log("winner X",count)
        titleRef.current.innerHTML="Congratulations X you are the winner";
       }else if(winner==="O"){
        console.log("winner O",count)
        titleRef.current.innerHTML="Congratulations O you are the winner";
       }else{
        console.log("draw",count)
        titleRef.current.innerHTML="Match became Draw";
       }
  }
  return (
    <div className="App">
      <h1>Tic-Tac-Toe Game</h1>
       <div className="board">
        <div className="row1">
          <div onClick={(e)=>toggle(e,0)} className="boxes"></div>
          <div onClick={(e)=>toggle(e,1)} className="boxes"></div>
          <div onClick={(e)=>toggle(e,2)} className="boxes"></div>
        </div>
        <div className="row2">
        <div onClick={(e)=>toggle(e,3)} className="boxes"></div>
        <div onClick={(e)=>toggle(e,4)} className="boxes"></div>
        <div onClick={(e)=>toggle(e,5)} className="boxes"></div>
        </div>
        <div className="row3">
        <div onClick={(e)=>toggle(e,6)} className="boxes"></div>
        <div onClick={(e)=>toggle(e,7)} className="boxes"></div>
        <div onClick={(e)=>toggle(e,8)} className="boxes"></div>
        </div>
        {/* {JSON.stringify(data)} */}
      </div>
      <button onClick={()=>{
        
        data=["","","","","","","","",""]
        setLock(false);
        titleRef.current.innerHTML="";
      }}>Reset</button>
      <h3 ref={titleRef}></h3>
    </div>
  );
}

export default App;
