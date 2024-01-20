import React,{useState} from 'react'

const Hoc = (OriginalComponent) => {
  let Newcomponent=()=>{
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    return <OriginalComponent count={count} increment={increment}/>
  }
  return Newcomponent;
}

export default Hoc