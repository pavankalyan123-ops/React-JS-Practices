import React from 'react'
import {useState} from 'react';
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const Pagination2 = () => {
   const pageSize=5;
   const totalPages=Math.ceil(arr.length/pageSize)
    const[currentUsers,setCurrentUsers]=useState(arr.slice(0,pageSize));
    const[currentPage,setCurrentPage]=useState(0);
    const[input,setInput]=useState('');
    const pageHandler=(index)=>{
      //if (index < 0 || index >= totalPages) return;
    // const startIndex = index * pageSize;
    // const endIndex = startIndex + pageSize;

    // setCurrentPage(index);
    // setCurrentUsers(arr.slice(startIndex, endIndex));
     setCurrentPage(index);
     setCurrentUsers(arr.slice(index*pageSize,pageSize*(index+1)))
    }
  return (
    <>
    <h1>Pagination Numbers</h1>
    <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Names</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((no,index)=>(
            <tr key={index}>
              <td>{no}</td>
              <td>User {no}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button onClick={()=>pageHandler(currentPage-1)} disabled={currentPage===0}>Prev</button>
       {currentPage+1} of {totalPages}
      <button onClick={()=>pageHandler(currentPage+1)} disabled={currentPage===5}>Next</button> &nbsp;
      Go to <input type="number" value={input} onChange={(e)=>setInput(parseInt(e.target.value))} /> &nbsp;
      <button onClick={()=>{
        pageHandler(input-1);
        setInput('');
      }}>Submit</button>
    </>
  )
}

export default Pagination2