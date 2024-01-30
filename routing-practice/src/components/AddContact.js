import React,{useState,createContext} from 'react'
import { Link } from 'react-router-dom';

export const context=createContext();

const AddContact = () => {
    const[input,setInput]=useState('');
    const[arr,setArr]=useState([]);
    const handleSubmit=()=>{
        setArr([...arr,input])
    }
  return (
    <div>
      <context.Provider value={arr}>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <Link to="/"><button onClick={handleSubmit}>Submit</button></Link>
        <Link to="/"><button>Go Back</button></Link>
      </context.Provider>
        
    </div>
  )
}

export default AddContact