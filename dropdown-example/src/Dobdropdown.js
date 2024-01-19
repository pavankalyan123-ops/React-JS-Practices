import React from 'react'
import {useState} from 'react';
const Dobdropdown = () => {
    const dates=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30,31]
        const months=["Jan","Feb","March","April","May","June","July","Aug",
        "Sep","Oct","Nov","Dec"];
        const years=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,
        2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
      2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,
      2029,2030,2031,2032,2034,2035,2036,2037,2038,2039,2040]
      const[data,setData]=useState({
        date:'',
        month:'',
        year:''
      })
      const{date,month,year}=data;
      const handleSelect=(e)=>{
        const{name,value}=e.target
        console.log(e.target,e.target.name,e.target.value)
          setData((prev)=>{
            return {...prev,[name]:value}
          })
      }
  return (
    <div>
        <h3>Select Your Date of Birth</h3>
      <select value={date} name="date" onChange={handleSelect}>
        <option value="">Date</option>
        {dates.map((mo,index)=>(
          <option key={index}  value={mo}>{mo}</option>
        ))}
      </select>
      <select value={month} name="month" onChange={handleSelect}>
        <option value="">Month</option>
        {months.map((mo,index)=>(
          <option key={index}  value={mo}>{mo}</option>
        ))}
      </select>
      <select value={year} name="year" onChange={handleSelect}>
        <option value="">Year</option>
        {years.map((mo,index)=>(
          <option key={index}  value={mo}>{mo}</option>
        ))}
      </select>
      <h3>Your Data of Birth is:{date}{month}{year} </h3>
      
      <h3>{JSON.stringify(data)}</h3>
    </div>
  )
}

export default Dobdropdown