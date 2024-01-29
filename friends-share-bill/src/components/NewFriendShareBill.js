import React,{useState} from 'react'

const NewFriendShareBill = () => {
    const[input,setInput]=useState('');
    const[friends,setFriends]=useState([]);
    const[selectedFriend,setSelectedFriend]=useState('');
    const[bill,setBill]=useState('');
    const paidFriend=selectedFriend&&friends.find(fr=>fr.id===+selectedFriend).name;
  return (
    <>
     <div>
       <input type="text" value={input} placeholder="Enter Friend name"
        onChange={(e)=>setInput(e.target.value)} />
       <button onClick={()=>{
         let obj={name:input,id:Date.now(),remainingBill:null};
         setFriends([...friends,obj]);
         setInput('')
       }}>Add</button>
       <div>
         <select value={selectedFriend} onChange={(e)=>{
           setSelectedFriend(e.target.value)
         }}>
           <option>--select friend--</option>
           {friends.map(fr=>(
             <option key={fr.id} value={fr.id}>{fr.name}</option>
           ))}
         </select>
       </div>
       <br/>
       <input type="text" placeholder="Enter Bill amount" value={bill}
       onChange={(e)=>setBill(e.target.value)} />
       <button onClick={()=>{
        let divideBill=+bill/friends.length;
        let arr=friends.map(fr=>{
          if(fr.id===+selectedFriend)
          {
            return {...fr,remainingBill:0}
          }else{
            return {...fr,remainingBill:divideBill}
          }
        })
        setFriends(arr);
       }}>Add Bill</button>
       <br/><br/>
       {friends.map((fr)=>(
         <div key={fr.id}>
           <h3>{fr.name}</h3>
           {fr.remainingBill!==null &&
            <li>{fr.name} has to pay {fr.remainingBill} to {paidFriend}</li>}
         </div>
       ))}
       <br/><br/>
       {JSON.stringify(friends)}
    </div>
    </>
  )
}

export default NewFriendShareBill