import React,{useReducer,useEffect,useState} from 'react';

function reducer(state,action){
    if(action.type==="fetchUsers"){
        return {...state,usersData:action.payload}
    }
    if(action.type==="loading"){
        return {...state,isLoading:action.payload}
    }
    if(action.type==="Error"){
        return {...state,isError:action.payload}
    }
    if(action.type==="delete"){
        const newdata=state.usersData.filter(user=>user.id!==action.payload)
        return {...state,usersData:newdata}
    }
    if(action.type==="Edit"){
        console.log(action.payload)
        return {...state,isEdit:action.payload}
    }
    if(action.type==="update"){
        const newdata=state.usersData.map(user=>{
            if(user.id===action.payload.id){
                return {
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email
                }
            }else{
                return user;
            }
        });
        return {...state,usersData:newdata}
    }
    return state;
}

const Example2 = () => {
    const initialState={
        usersData:[],
        isLoading:false,
        isError:{status:false,msg:""},
        isEdit:{status:false,id:null,name:'',email:''},
    }
    const[state,dispatch]=useReducer(reducer,initialState);
     useEffect(()=>{
        fetchData();
    },[])
    async function fetchData(){
        dispatch({type:"loading",payload:true});
        dispatch({type:"Error",payload:{status:false,msg:""}})
        try{
            let res= await fetch("https://jsonplaceholder.typicode.com/users");
            let data=await res.json();
            dispatch({type:"fetchUsers",payload:data})
            dispatch({type:"loading",payload:false});
            dispatch({type:"Error",payload:{status:false,msg:""}})
        }catch(error){
            dispatch({type:"Error",payload:{status:true,msg:error}})
        }
    }
    if(state.isLoading){
        return(
            <div>loading...</div>
        )
    }
    const updateUser=(name,email,id)=>{
        console.log(name);
        console.log(email);
        console.log(id)
      dispatch({type:"update",payload:{name,email,id}})
    }
  return (
    <div>
        <h1>Users Data</h1>
        <div>{state.isEdit?.status && 
        <EditData name={state.isEdit.name} email={state.isEdit.email} updateUser={updateUser}
         id={state.isEdit.id}/>}</div>
        {state.usersData.map(user=>(
            <div key={user.id} style={{backgroundColor:"lightblue"}}>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <button onClick={()=>{
                    dispatch({type:"delete",payload:user.id})
                }}>Delete</button>
                <button onClick={()=>{
                    dispatch({type:"Edit",payload:{status:true,id:user.id,name:user.name,email:user.email}});
                    console.log(state.isEdit.name+" "+state.isEdit.id+" "+state.isEdit.email)
                }}>Edit</button>
            </div>
        ))}
    </div>
  )
}

export default Example2;

function EditData({name,email,id,updateUser}){
    const[username,setUsername]=useState(name || '' );
    const[userEmail,setUserEmail]=useState(email || '')
    return(
        <div>
            <input type="text" value={username} placeholder='Enter Name' onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" value={userEmail} placeholder='Enter Email' onChange={(e)=>setUserEmail(e.target.value)} />
            <button onClick={()=>{
                updateUser(username,userEmail,id)
            }}>Update</button>
        </div>
    )
}