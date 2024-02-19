import React from 'react';
import { useRef } from 'react';

const Headings = () => {
    const headings=useRef([])
    const handleChange=(e)=>{
        for(let i=0;i<headings.current.length;i++)
        {
            headings.current[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
  return (
    <>
    <h3 ref={(el)=>headings.current[0]=el} onClick={handleChange}>This is 1st heading</h3>
    <h3 ref={(el)=>headings.current[1]=el} onClick={handleChange}>This is 2nd heading</h3>
    <h3 ref={(el)=>headings.current[2]=el} onClick={handleChange}>This is 3rd heading</h3>
    <h3 ref={(el)=>headings.current[3]=el} onClick={handleChange}>This is 4th heading</h3>
    <h3 ref={(el)=>headings.current[4]=el} onClick={handleChange}>This is 5th heading</h3>
    </>
  )
}

export default Headings