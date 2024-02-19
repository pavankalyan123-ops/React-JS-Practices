import React from 'react';
import {useRef} from 'react';

const ToggleEx = () => {
    const ele=useRef(null);
  return (
    <>
     <h3 ref={ele} className='active'>This is 1st h1 Tag</h3>
     <button onClick={()=>{
        ele.current.classList.toggle('active');
        ele.current.classList.toggle('inactive')
     }}>Click</button>
    </>
  )
}

export default ToggleEx