import React from 'react';
import {useState} from 'react';
const List = [
  {
    state: "Andhra Pradesh",
    cities: ["Ongole", "Guntur", "Vijayawada", "Vizag", "Tirupathi"],
  },
  {
    state: "Telangana",
    cities: ["Hyderabad", "Secunderabad", "Warangal", "Khammam", "Nizamabad"],
  },
  // ... other state data
];

const DestructureEx = () => {
    const[data,setData]=useState({
        selectedState:'',
        selectedCity:''
      })
      const{selectedState,selectedCity}=data;
      const handleSelect=(e)=>{
        const{name,value}=e.target;
        setData((prev)=>{
          return {...prev,[name]:value}
        })
      }
  return (
    <div>
      <h1>Dynamic Dropdowns in React</h1>
      <div>
        <label>Select State:</label>
        <select
          value={selectedState} name="selectedState"
          onChange={handleSelect}
        >
          <option value="">Select State</option>
          {List.map((stateData, index) => (
            <option key={index} value={stateData.state}>
              {stateData.state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select City:</label>
        <select
          value={selectedCity} name="selectedCity"
          onChange={handleSelect}
        >
          <option value="">Select City</option>
          {selectedState &&
            List.find((stateData) => stateData.state === selectedState).cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default DestructureEx