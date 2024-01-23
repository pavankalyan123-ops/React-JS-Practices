import React from 'react';
import {useState} from 'react';

const DisplayPwdRange = ({setAnswer}) => {
    const[inputRange,setInputRange]=useState(0);
    const[selectedCheck,setSelectedCheck]=useState([]);
    const handleCheck=(item)=>{
         if(selectedCheck.includes(item))
         {
            setSelectedCheck(selectedCheck.filter(name=>name!==item))
         }else{
            setSelectedCheck([...selectedCheck,item])
         }
    }
    const small="abcdefghijklmnopqrstuvwxyz";
    const capitals="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$%^&*()";
    //const[answer,setAnswer]=useState('');
    const handleGenerator=()=>{
      let totalstr='';
      if(selectedCheck.includes("upper"))
      {
        totalstr+=capitals;
      }
      if(selectedCheck.includes("lower"))
      {
        totalstr+=small;
      }
      if(selectedCheck.includes("number"))
      {
        totalstr+=numbers;
      }
      if(selectedCheck.includes("symbol"))
      {
        totalstr+=symbols;
      }
      let randomLetter='';
      for(let i=0;i<inputRange;i++)
      {
        let randomIndex=Math.floor(Math.random()*totalstr.length);
        randomLetter+=totalstr[randomIndex]
      }
      setAnswer(randomLetter)
      
    }
  return (
    <div className='second-container'>
        <div className='pwd-range'>
            <h3>Password Length {inputRange}</h3>
            <input type="range" min="0" max="25" value={inputRange}
            onChange={(e)=>setInputRange(e.target.value)} />
        </div>
        <div className='pwd-checkboxes'>
            <div className='checkbox-row'>
                <input type="checkbox" checked={selectedCheck.includes("upper")} onChange={()=>handleCheck("upper")} />
                <label>Includes Uppercase letters</label>
            </div>
            <div className='checkbox-row'>
                <input type="checkbox"  checked={selectedCheck.includes("lower")} onChange={()=>handleCheck("lower")} />
                <label>Includes LowerCase letters</label>
            </div>
            <div className='checkbox-row'>
                <input type="checkbox"  checked={selectedCheck.includes("number")} onChange={()=>handleCheck("number")} />
                <label>Includes Numbers</label>
            </div>
            <div className='checkbox-row'>
                <input type="checkbox"  checked={selectedCheck.includes("symbol")} onChange={()=>handleCheck("symbol")} />
                <label>Includes Symbols</label>
            </div>
        </div>
        <button onClick={handleGenerator}>Generate Password</button>
        
    </div>
  )
}

export default DisplayPwdRange