import React,{useState} from 'react'

const DynamicInput2 = () => {
    const[arr,setArr]=useState([{fname:'',lname:''}]);
    const handleChange=(e,index)=>{
        const{name,value}=e.target;
        const newarr=[...arr];
        newarr[index][name]=value;
        setArr(newarr)
    }
    const handleAdd=()=>{
      setArr([...arr,{fname:'',lname:''}])
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
                <input type="text" autoComplete='off' name="fname" value={a.fname} onChange={(e)=>handleChange(e,index)} />
                <input type="text" autoComplete='off' name="lname" value={a.lname}  onChange={(e)=>handleChange(e,index)} />
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default DynamicInput2