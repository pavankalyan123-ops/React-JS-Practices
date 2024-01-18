
import './App.css';
import {useState} from 'react';

function App() {
  const[arr,setArr]=useState(["cricket","vollyball","basketball","football","baseball"]);
  const[input,setInput]=useState('');
  const[selectedItem,setSelectedItem]=useState([])
  const handleChange=(item)=>{
     if(selectedItem.includes(item))
     {
      setSelectedItem(selectedItem.filter(game=>game!==item));
     }else{
      setSelectedItem([...selectedItem,item])
     }
  }
  const handleAdd=()=>{
    setArr([...arr,input])
    setInput('')
  }
const handleDelete=(ind)=>{
  let newarr=arr.filter((item,index)=>ind!==index);
  setArr(newarr);
}
  return (
    <>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <div>
        <table className='App'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>check</th>
              <th>List</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td><input type="checkbox" value={item} onChange={()=>handleChange(item)}
                checked={selectedItem.includes(item)} /></td>
                <td>{item}</td>
                <td>{selectedItem.includes(item)&&<button onClick={()=>handleDelete(index)}>Delete</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {JSON.stringify(selectedItem)}
    </>
  );
}

export default App;
