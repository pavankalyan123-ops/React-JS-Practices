import React, { useState } from 'react';

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

const Duplicate = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div>
      <h1>Dynamic Dropdowns in React</h1>
      <div>
        <label>Select State:</label>
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity('');
          }}
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
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
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
  );
};

// So, if you select "Telangana" in the first <select> element, 
// selectedState will be set to "Telangana". 
// The List.find(...) part will find the object in the List array where state is "Telangana," 
// and then it will access the cities property of that object.

// Effectively, it's like saying List[1].cities.map(...) in this specific example,
//  because "Telangana" is the second element (index 1) in the List array

//if city value not changing when you change the state then you must use value property along with onchange in select tag 

// List.filter(st=>st.state===selectedState)[0].cities.map((ct,index)=>console.log(ct)) 
// for above filter method u can use find method as well when they selected filter()[0]

export default Duplicate;


const arr=[
  {
      state:"Andhra Pradesh",
      cities:["Ongole","Gunutur","Vijayawada","Vizag","Tirupathi"]
  },
  {
      state:"Telangaana",
      cities:["Hyderabad","Sicindrabad","Warangal","Khammam","Nizamabad"]
  },
  {
    state:"Andhra Pradesh",
    cities:["Nellore","Kakinaada","Rajamandri"]
  }
]

const andhracities=arr.filter(a=>a.state==="Andhra Pradesh").map(item=>item.cities).flat();
console.log(andhracities)
