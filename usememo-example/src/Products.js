import React from 'react';
import {useState,useEffect} from 'react';
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
const Products = () => {
const[input,setInput]=useState('');
const[arr,setArr]=useState([]);
const[timer,setTimer]=useState(new Date().toLocaleTimeString())
useEffect(()=>{
    setInterval(() => {
        setTimer(new Date().toLocaleTimeString())
    }, 1000);
    console.log("This is useEffect Example")
    let newArr=mobiles.filter(mobile=>mobile.company.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    setArr(newArr)
},[input,timer])
  return (
    <>
     <h1>The time is : {timer}</h1>
     <h1>Product List</h1>
     <input type="text" placeholder='search something' value={input} onChange={(e)=>
        {
            setInput(e.target.value);
            
            }} />
     <table>
        <thead>
            <tr>
            <th>S.No</th>
            <th>Company</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
           {arr.map((mobile,index)=>(
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

export default Products