import React from 'react'
import {useState,useMemo} from 'react';
const mobiles=[
    {
        company:"Apple",
        price:50000
    },
    {
        company:"Iqoo Z3",
        price:18000
    },
    {
        company:"Real me",
        price:21000
    }
]
const UsememoEx = () => {
    const[timer,setTimer]=useState(new Date().toLocaleTimeString());
    const[input,setInput]=useState('');
    setInterval(()=>{
        setTimer(new Date().toLocaleTimeString())
    },1000)
    const[filteredProduct,setFilteredProduct]=useState([]);
    useMemo(()=>{
        console.log("this is useMemo Example")
       let newarr=mobiles.filter(mobile=>mobile.company.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
       setFilteredProduct(newarr)
    },[input])
  return (
    <>
    <h1>Using UseMemo Example</h1>
      <h3>The time is :{timer}</h3>
      <input type="text" placeholder='search something' value={input} onChange={(e)=>setInput(e.target.value)} />
      <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Mobiles</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {filteredProduct.map((mobile,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{mobile.company}</td>
                    <td>{mobile.price}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default UsememoEx