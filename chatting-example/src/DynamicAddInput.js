import React from 'react';
import {useState} from 'react';

const DynamicAddInput = () => {
    const[data,setData]=useState([
        {
          fname:'',
          lname:''
        }
      ])
      const handleAdd=()=>{
        setData([...data,{
          fname:'',
          lname:''
        }])
      }
      const handleChange=(e,index)=>{
           const{name,value}=e.target;
           const onchangerval=[...data];
           onchangerval[index][name]=value;
           setData(onchangerval)
      }
      const handleDelete=(index)=>{
        const newdata=data.filter((val,i)=>index!==i);
        setData(newdata);
      }
  return (
    <div>
       <button onClick={handleAdd}>Add</button>
      {data.map((val,index)=>(
        <div>
          <input type="text" name="fname" value={val.fname}
          onChange={(e)=>handleChange(e,index)} />
          <input type="text" name="lname" value={val.lname} 
          onChange={(e)=>handleChange(e,index)}/>
          <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default DynamicAddInput