import React from 'react';
import { useState } from 'react';

const CopyInput = () => {
    const[input,setInput]=useState('');
    const handleCopy=()=>{
        navigator.clipboard.writeText(input);
        alert("copied")
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default CopyInput