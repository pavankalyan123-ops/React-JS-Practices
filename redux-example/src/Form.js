import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit,withdraw,nameupdate,mobileupdate } from './redux/actions';

const Form = () => {
    const[data,setData]=useState({
        balance:null,
        name:'',
        phnumber:null
    })
    const[transId,setTransId]=useState(0);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setData((prev)=>{
            return {...prev,[name]:value}
        })
    }
  return (
    <>
    <h1>Form</h1>
    <input type="number" name="balance" value={data.balance}
    onChange={handleChange}
    placeholder='Enter Amount'/>
    
    <button onClick={()=>{
        dispatch(deposit(data.balance))
        setTransId(transId+1)
        dispatch({type:"Add_Transaction",payload:{id:transId,amount:data.balance,type:"credit",date:new Date()}})
        //dispatch({type:"deposit",payload:data.balance})
        setData({...data,balance:''})
    }}>Deposit</button>

    <button onClick={()=>{
        dispatch(withdraw(data.balance))
        setTransId(transId+1)
        dispatch({type:"Add_Transaction",payload:{id:transId,amount:data.balance,type:"debit",date:new Date()}})
        //dispatch({type:"withdraw",payload:data.balance})
        setData({...data,balance:''})
    }}>Withdraw</button><br/><br/>

    <input type="text" name="name" value={data.name}
    onChange={handleChange}
    placeholder='Enter Username' />

    <button onClick={()=>{
        dispatch(nameupdate(data.name))
        //dispatch({type:"nameupdate",payload:data.name})
        setData({...data,name:''})
    }}>Update</button> <br/><br/>

    <input type="number" name="phnumber" value={data.phnumber}
    onChange={handleChange}
    placeholder='Enter mobilenumber'/>

    <button  onClick={()=>{
        dispatch(mobileupdate(data.phnumber))
        //dispatch({type:"mobileupdate",payload:data.phnumber})
        setData({...data,phnumber:''})
    }}>Update</button> <br/><br/>

    <button>Reset</button>
    </>
  )
}

export default Form