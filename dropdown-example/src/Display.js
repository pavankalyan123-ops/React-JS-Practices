import React from 'react';
import {useState} from 'react';
import { BigList } from './BigList';
const Display = () => {
    const[selectedState,setSelectedState]=useState('');
    const[selectedDistrict,setSelectedDistrict]=useState('');
    const[selectedCity,setSelectedCity]=useState('');
  return (
    <>
    <h1>Big List</h1>
    <div>
        <div>
            <label>Select State: </label>
            <select value={selectedState} onChange={(e)=>{
                setSelectedState(e.target.value);
                setSelectedDistrict('')
            }}>
                <option value="">select State</option>
                {BigList.map((st,index)=>(
                    <option value={st.state}>{st.state}</option>
                ))}
            </select>
        </div>
        <div>
            <label>select District: </label>
            <select value={selectedDistrict} onChange={(e)=>{
                setSelectedDistrict(e.target.value)
            }}>
                <option value="">select district</option>
                {selectedState&&BigList.find(st=>st.state===selectedState).districts.map((dt,index)=>(
                    <option value={dt.district}>{dt.district}</option>
                ))}
            </select>
        </div>
        <div>
            <label>select city: </label>
            <select value={selectedCity} onChange={(e)=>{
                setSelectedCity(e.target.value)
            }}>
                <option value="">select city: </option>
                {
                    (selectedDistrict&&selectedState) &&
                    BigList.find(st=>st.state===selectedState).districts.find(dt=>dt.district===selectedDistrict).cities.map((city,index)=>(
                        <option value={city}>{city}</option>
                    ))
                }
            </select>
        </div>
    </div>
    </>
  )
}

export default Display