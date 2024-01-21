import React from 'react'
import {useState,useEffect} from 'react';
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const Pagination1 = () => {
    const[pageSize,setPageSize]=useState(5);
  const[currentPage,setCurrentPage]=useState(0);
  const[currentUsers,setCurrentUsers]=useState(arr.slice(0,5));
  const[pageCount,setPageCount]=useState(Math.ceil(arr.length/pageSize))
  const handleBtn=(index)=>{
    
      setCurrentUsers(arr.slice(index*pageSize,pageSize*(index+1)));
      setCurrentPage(index)
      console.log(currentPage);
      console.log(currentUsers);
  }
  useEffect(()=>{
    handleBtn(0)
  },[pageSize])
  return (
    <>
    <h1>Pagination Example 1</h1>
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
      <button onClick={()=>handleBtn(currentPage-1)} disabled={currentPage===0}>Prev</button>
      {Array(pageCount).fill(null).map((no,index)=>(
        <button className={`${currentPage===index?"active-btn":""}`} onClick={()=>handleBtn(index)} key={index}>{index+1}</button>
      ))}
      <button onClick={()=>handleBtn(currentPage+1)} disabled={currentPage===5}>Next</button>
      <label>Page Size</label>
      <select value={pageSize} onChange={(e)=>{
        // setPageSize(e.target.value);
        // setPageCount(Math.ceil(arr.length/e.target.value));
        // let ans=e.target.value
        // console.log(typeof ans)
        setPageSize(parseInt(e.target.value));
        setPageCount(Math.ceil(arr.length/parseInt(e.target.value)))
      }}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </>
  )
}

export default Pagination1