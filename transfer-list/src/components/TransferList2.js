import React,{useState} from 'react';
import './Transfer2.css'

const interSection=(a,b)=>{
    return a.filter(val=>b.indexOf(val)!==-1)
 }
 const not=(a,b)=>{
   return a.filter(val=>b.indexOf(val)===-1)
 }
 
 let arr=["cricket","football","basketball","vollyball","kabaddi","tennis ball"];

const TransferList2 = () => {
    const[left,setLeft]=useState(arr);
    const[right,setRight]=useState([]);
    const[checked,setChecked]=useState([]);
    const leftchecked=interSection(left,checked);
    const rightchecked=interSection(right,checked);
    const handleClicked=(item)=>{
       if(checked.includes(item))
       {
         let newchecked=checked.filter(c=>c!==item);
         setChecked(newchecked);
       }else{
         setChecked([...checked,item]);
       }
    }
  
    const moveRight=()=>{
       setRight(right.concat(leftchecked));
       setLeft(not(left,leftchecked));
       //setChecked([])
       setChecked(not(checked,leftchecked))
    }
    const moveLeft=()=>{
       setLeft(left.concat(rightchecked));
       setRight(not(right,rightchecked));
       setChecked(not(checked,rightchecked))
    }
  return (
    <div>
        <div className="container">
        <div className="box">
          {left.map((item,index)=>(
            <div key={index} className="select" onClick={()=>handleClicked(item)}
            style={{backgroundColor:`${checked.includes(item)?"blue":""}`}}>
              {item}
            </div>
          ))}
        </div>
        <div className="actions container">
          <button onClick={moveRight}>&gt;</button>
          <button onClick={moveLeft}>&lt;</button>
        </div>
        <div className="box">
        {right.map((item,index)=>(
            <div key={index} className="select" onClick={()=>handleClicked(item)}
            style={{backgroundColor:`${checked.includes(item)?"blue":""}`}}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {JSON.stringify(checked)}
    </div>
  )
}

export default TransferList2