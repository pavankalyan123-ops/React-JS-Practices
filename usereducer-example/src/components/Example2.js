import React,{useReducer} from 'react';

function reducer(state,action){
    return state;
}

const Example2 = () => {
    const initialState={
        usersData:[],
        isLoading:false,
        isError:{status:false,msg:""}
    }
    const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h1>Users Data</h1>
    </div>
  )
}

export default Example2