import "./styles.css";
import {useState} from 'react';
import {arr} from './Arr';


export default function Switch() {
  const[selected,setSelected]=useState();
  const filtered=selected?arr.filter(a=>a.running==="unhealthy"):arr;
  const handleSelect=(e)=>{
     setSelected(e.target.checked)
  }
  return (
    <div className="App">
      <input type="checkbox" onChange={handleSelect} /> Has Errors
      
      <br/><br/>
      <div className="container">
       <div className="clusters">
        {filtered.filter(a=>a.cluster==="Preprod10").map((a,index)=>(
          <div className={a.running==="healthy"?"green":"red"}>
            <div>{a.name}</div>
            <div>{a.cluster}</div>
          </div>
        ))}
       </div>
       <div className="clusters">
        {filtered.filter(a=>a.cluster==="Preprod11").map((a,index)=>(
          <div className={a.running==="healthy"?"green":"red"}>
            <div>{a.name}</div>
            <div>{a.cluster}</div>
          </div>
        ))}
       </div>
       <div className="clusters">
        {filtered.filter(a=>a.cluster==="Preprod18").map((a,index)=>(
          <div className={a.running==="healthy"?"green":"red"}>
            <div>{a.name}</div>
            <div>{a.cluster}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}


// let arr=[3,6,2,3,8,6,2,10,1];
// let ans=arr.filter((val,index)=>arr.indexOf(val)!==index).map(a=>console.log(a))
// console.log(ans)

// const ans=List.filter((item,index)=>{
//   return List.findIndex(other=>other.company===item.company)===index
// })
// console.log(ans);
