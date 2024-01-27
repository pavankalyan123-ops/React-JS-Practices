import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk"

const initialState={
    balance:0,
    fullname:"pavan",
    mobilenumber:79891029
}

function accountreducer(state=initialState,action){
    switch (action.type){
        case "deposit":
            return {...state,balance:state.balance+ +action.payload};
        case "withdraw":
            return {...state,balance:state.balance- +action.payload};
        case "mobileupdate":
            return {...state,mobilenumber:action.payload};
        case "nameupdate":
            return {...state,fullname:action.payload};
        default:
            return state;
    }
}

function transactionreducer(state=[],action){
    switch (action.type){
        case "Add_Transaction":
            return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
        default:
            return state;
    }
}

const initialState2={
    userData:{},
};

function userdatareducer(state=initialState2,action)
{
    switch (action.type){
        case "add":
            return {...state,userData:action.payload}
        default:
            return state;
    }
}

const initialState3={
    todo:[],
    id:0
}

function todoreducer(state=initialState3,action){
    switch(action.type){
        case "addTodo":
            return {...state,todo:[...state.todo,action.payload.name],id:state.id+1};
        default:
            return state;
    }
}

const rootreducer=combineReducers(
    {
        account:accountreducer,
        transaction:transactionreducer,
        users:userdatareducer,
        todos:todoreducer
    }
)

export const store=createStore(rootreducer,applyMiddleware(thunk))