import React,{useReducer} from 'react'

function reducer(state,action){
    console.log(action.payload)
   if(action.type==="DELETE")
   {
       const newdata=state.data.filter(d=>d.id!==action.payload)
       console.log(newdata)
       return {...state,data:newdata,length:newdata.length}
   }
   return state;
}

const Example1 = () => {
    const initialState={
        data:[{
            id:1,
            firstname:"Pavan",
            email:"pavan@email"
        },{
            id:2,
            firstname:"Kalyan",
            email:"kalyan@email"
        }],
        length:2,
    }
    const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
       <h1>Users Data  length:{state.length}</h1>
       {state.data.map(d=>(
        <div key={d.id}>
            <h3>{d.firstname}</h3>
            <h3>{d.email}</h3>
            <button onClick={()=>{
                dispatch({type:"DELETE",payload:d.id})
            }}>Delete</button>
        </div>
       ))}
       
    </div>
  )
}

export default Example1