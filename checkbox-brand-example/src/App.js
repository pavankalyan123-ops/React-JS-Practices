
import './App.css';
import { List } from './List';
import {useState} from 'react';

function App() {
  const checkList=List.filter((item,index,self)=>{
    let firstInd=self.findIndex(s=>s.company===item.company);
    return firstInd===index
  })
  const[selectedItem,setSelectedItem]=useState([]);
  const handleChange=(company)=>{
    if(selectedItem.includes(company))
    {
      setSelectedItem(selectedItem.filter(item=>item!==company))
    }else{
      setSelectedItem([...selectedItem,company])
    }
  }
  const products=selectedItem.length===0?List:List.filter(item=>selectedItem.includes(item.company))
  return (
    <>
     <div className='App'>
        <div className='App3'>
           {checkList.map((item,index)=>(
            <div key={index}>
              <input type="checkbox" checked={selectedItem.includes(item.company)} onChange={()=>handleChange(item.company)} /> {item.company}
            </div>
           ))}
        </div>
        <div className='App1'>
          {products.map((item,index)=>(
            <div className='App2' key={index}>
              <h3>{item.id}</h3>
              <h3>{item.company}</h3>
              <h3>{item.model}</h3>
            </div>
          ))}
        </div>
     </div>
    </>
  );
}

export default App;
