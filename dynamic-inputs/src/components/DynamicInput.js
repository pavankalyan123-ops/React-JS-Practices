import React,{useState} from 'react'

const DynamicInput = () => {
    const[arr,setArr]=useState([{fname:''}]) 
    const handleChange=(e,index)=>{
      let newarr=[...arr];
      newarr[index]=e.target.value;
      setArr(newarr)
    }
    const handleAdd=()=>{
      setArr([...arr,{fname:''}])
    }
    const handleDelete=(index)=>{
       let newarr=arr.filter((a,ind)=>ind!==index);
       setArr(newarr)
    }
  return (
    <div>
       <button onClick={handleAdd}>Add</button>
      {arr.map((a,index)=>(
        <div>
          <input type="text" value={a.fname} onChange={(e)=>handleChange(e,index)} />
          <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default DynamicInput