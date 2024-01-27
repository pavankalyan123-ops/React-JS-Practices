import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

const MiddlewareEx = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.users.userData)
    async function fetchData(dispatch,getState){
        let res= await fetch(`https://jsonplaceholder.typicode.com/users/2`);
        let data= await res.json();
        dispatch({type:"add",payload:data})
    }
  return (
    <>
      <button onClick={()=>dispatch(fetchData)}>Get Users</button>
      <h3>{data.name}</h3>
      <h3>{data.username}</h3>
      <h3>{data.email}</h3>
    </>
  )
}

export default MiddlewareEx