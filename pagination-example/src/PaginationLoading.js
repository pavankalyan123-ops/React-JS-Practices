import React from 'react'
import {useState,useEffect} from 'react';
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const PaginationLoading = () => {
    const[pageSize,setPageSize]=useState(5);
    const[currentUsers,setCurrentUsers]=useState(arr.slice(0,pageSize));
    const[isLoading,setLoading]=useState(false);
    const handleLoad=()=>{
        if(currentUsers.length<arr.length)
        {
            setLoading(true)
            setTimeout(() => {
                setPageSize(pageSize+5);
                setLoading(false)
            }, 2000);
        }
    }
    useEffect(()=>{
       setCurrentUsers(arr.slice(0,pageSize))
    },[pageSize])
  return (
    <>
    <h1>Pagination Loading</h1>
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
      <button onClick={handleLoad} className='load-btn'>
        {isLoading?"Loading......":"Load More"}
      </button>
    </>
  )
}

export default PaginationLoading