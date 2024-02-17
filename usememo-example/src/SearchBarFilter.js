import React from 'react';
import {useState} from 'react';
const data=["pavan","kalyan","anil",
"ajay","ram","sivani","pavani","kumar","kalyan","balue","bablu"];

const SearchBarFilter = () => {
    const[input,setInput]=useState('');
  return (
    <>
     <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={input}
          onChange={(e)=>setInput(e.target.value)} />
          <button>search</button>
        </div>
        <div className="dropdown">
          {data.filter(item=>{
            return input && item.toLowerCase().startsWith(input.toLowerCase()) && item!==input
          }).map((item,index)=>(
            <div key={index} 
            onClick={()=>{setInput(item)}}
            className="dropdown-row">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchBarFilter