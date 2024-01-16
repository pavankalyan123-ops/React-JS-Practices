import React from 'react'
import { useState } from 'react'

const SearchState = () => {
    const states=["Andhra Pradesh","Telagaana","Karnataka","tamilnaadu","kerala","maharastra","pune"]
    const[input,setInput]=useState('')
  return (
    <div>
        <input list="data" value={input} onChange={(e)=>setInput(e.target.value)} />
        <datalist id="data">
           {states.map((state,index)=>(
            <option>{state}</option>
           ))}
        </datalist>
        {input}
    </div>
  )
}

export default SearchState