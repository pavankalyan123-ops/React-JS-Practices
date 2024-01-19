
import './App.css';
import { List } from './List';
import {useState} from 'react';
import Duplicate from './Duplicate';
import Display from './Display';
function App() {
  const[selectedState,setSelectedState]=useState('');
  const[selectedCity,setSelectedCity]=useState('');
  return (
    <>
     <div>
      <div>
        <label>Select State: </label>
        <select value={selectedState} onChange={(e)=>{
          setSelectedState(e.target.value);
          setSelectedCity('')
        }}>
          <option value="">Select State</option>
          {List.map((st,index)=>(
            <option value={st.state}>{st.state}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select City: </label>
        <select value={selectedCity} onChange={(e)=>{
          setSelectedCity(e.target.value)
        }}>
          <option value="">Select City</option>
          {selectedState&&List.find(st=>st.state===selectedState).cities.map((city,index)=>(
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
     </div>
     
     <Duplicate/>
     <Display/>
    </>
  );
}

export default App;
