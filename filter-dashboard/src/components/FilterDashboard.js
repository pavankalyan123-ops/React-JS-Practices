import React,{useState} from 'react';
import './Filter.css'


const animalData = [
  { name: 'Eagle', class: 'Birds' },
  { name: 'Penguin', class: 'Birds' },
  { name: 'Parrot', class: 'Birds' },
  { name: 'Lion', class: 'Mammals' },
  { name: 'Tiger', class: 'Mammals' },
  { name: 'Elephant', class: 'Mammals' },
  { name: 'Cobra', class: 'Reptiles' },
  { name: 'Lizard', class: 'Reptiles' },
  { name: 'Tortoise', class: 'Reptiles' },
  { name: 'Salmon', class: 'Fish' },
  { name: 'Shark', class: 'Fish' },
  { name: 'Trout', class: 'Fish' },
];

export default function FilterDashboard() {
  const[selected,setSelected]=useState([])
  const filtered=animalData.filter((animals,index)=>{
    const firstIndex=animalData.findIndex(an=>an.class===animals.class);
    return firstIndex===index;
  });
  const[selected2,setSelected2]=useState(Array(filtered.length).fill(false));;
  const display=selected.length>0?animalData.filter(an=>selected.includes(an.class)):animalData;
  //const display=selected?animalData:animalData.filter(an=>selected.includes(an.class));
  const handleSelect=(index,item)=>{
    let newarr=[...selected];
    newarr[index]=!newarr[index];
  setSelected2(newarr)
  if(selected.includes(item))
  {
    setSelected(selected.filter(s=>s!==item));
  }else{
    setSelected([...selected,item])
  }
  }
  
  return (
    <div>
      <div className="select">
      {filtered.map((f,index)=>(
        <div key={index} >
          <button style={{backgroundColor:`${selected.includes(f.class)?"blue":""}`}}
           onClick={()=>handleSelect(index,f.class)}>{f.class}</button>
        </div>
      ))}
      </div>
      <br/>
      <div className="box">
      {display.map((a,index)=>(
        <div key={index} className="boxx" >
          {a.name}
        </div>
      ))}
      </div>
    </div>
  );
}
