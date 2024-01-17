import React from 'react';
import { useState } from 'react';
import { arr } from './Arr';

const SwitchUI = () => {
    const[selected,setSelected]=useState('');
    const filtered10=arr.filter(a=>a.running==="unhealthy" && a.cluster==="Preprod10");
    const preprod10Arr=selected?filtered10:arr.filter(a=>a.cluster==="Preprod10");
    const filtered11=arr.filter(a=>a.running==="unhealthy" && a.cluster==="Preprod11");
    const preprod11Arr=selected?filtered11:arr.filter(a=>a.cluster==="Preprod11");
    const filtered18=arr.filter(a=>a.running==="unhealthy" && a.cluster==="Preprod18")
    const preprod18Arr=selected?filtered18:arr.filter(a=>a.cluster==="Preprod18");
    
    const handleSelect=(item)=>{
        if(selected.includes(item))
        {
          setSelected("");
        }else{
          setSelected(item);
        }
    }
  return (
    <>
       <div>
      <input type="checkbox" checked={selected.includes("checking")}
      onChange={()=>handleSelect("checking")} /> 
      <label>Has Issues</label>
    </div>
    <div className="App">
        <div className="container1">
          <h3>Preprod10 cluster</h3>
          {preprod10Arr.map((a,index)=>(
            <div className={`${a.running==="healthy"?"item":"itemRed"}`}>
               <div>{a.name}</div>
               <div>{a.cluster}</div>
            </div>
          ))}
        </div>
        <div className="container2">
          <h3>Preprod11 cluster</h3>
          {preprod11Arr.map((a,index)=>(
            <div className={`${a.running==="healthy"?"item":"itemRed"}`}>
               <div>{a.name}</div>
               <div>{a.cluster}</div>
            </div>
          ))}
        </div>
        <div className="container3">
          <h3>Preprod18 cluster</h3>
          {preprod18Arr.map((a,index)=>(
            <div className={`${a.running==="healthy"?"item":"itemRed"}`}>
               <div>{a.name}</div>
               <div>{a.cluster}</div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default SwitchUI