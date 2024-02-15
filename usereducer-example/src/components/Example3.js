import React,{useReducer} from 'react';

let pavanEmployees = 5;
let pavanBeds = 3;
let kalyanEmployees = 8;
let kalyanBeds = 6;

const initialState = {
    pavan: {
        employees: pavanEmployees,
        beds: pavanBeds
    },
    kalyan: {
        employees: kalyanEmployees,
        beds: kalyanBeds
    },
    totalEmps: pavanEmployees + kalyanEmployees,
    totalBeds: pavanBeds + kalyanBeds
};

function reducer(state,action){
    if(action.type==="pavan_addEmp"){
        return {...state,pavan:{...state.pavan,employees:action.payload.emp},totalEmps:action.payload.total}
    }
    if(action.type==="kalyan_addEmp"){
        return {...state,kalyan:{...state.kalyan,employees:action.payload.emp},totalEmps:action.payload.total}
    }
    if(action.type==="pavan_addBed"){
        return {...state,pavan:{...state.pavan,beds:action.payload.bed},totalBeds:action.payload.total}
    }
    if(action.type==="kalyan_addBed"){
        return {...state,kalyan:{...state.kalyan,beds:action.payload.bed},totalBeds:action.payload.total}
    }
    return state;
}
const Example3 = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <Pavan state={state} dispatch={dispatch}/>
        <hr/>
        <Kalyan state={state} dispatch={dispatch}/>
        
    </div>
  )
}

export default Example3;

function Pavan({state,dispatch}){
    
    return(
        <div>
            <h3>Pavan Company</h3>
            <button onClick={()=>{
                dispatch({type:"pavan_addEmp",payload:{emp:state.pavan.employees+1,total:state.totalEmps+1}})
                
            }}>Add Employess</button>
            <button onClick={()=>{
                dispatch({type:"pavan_addBed",payload:{bed:state.pavan.beds+1,total:state.totalBeds+1}})
            }}>Add bed</button>
            <h3>Employees:{state.pavan.employees}</h3>
            <h3>Beds:{state.pavan.beds}</h3>
            <h3>Global: Employees:{state.totalEmps} Beds:{state.totalBeds}</h3>
        </div>
    )
}

function Kalyan({state,dispatch}){
    return(
        <div>
            <h3>kalyan Company</h3>
            <button onClick={()=>{
                dispatch({type:"kalyan_addEmp",payload:{emp:state.kalyan.employees+1,total:state.totalEmps+1}})
            }}>Add Employess</button>
            <button onClick={()=>{
                dispatch({type:"kalyan_addBed",payload:{bed:state.kalyan.beds+1,total:state.totalBeds+1}})
            }}>Add bed</button>
            <h3>Employees:{state.kalyan.employees}</h3>
            <h3>Beds:{state.kalyan.beds}</h3>
            <h3>Global: Employees:{state.totalEmps} Beds:{state.totalBeds}</h3>
        </div>
    )
}

