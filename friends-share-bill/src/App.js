import React,{useState} from 'react';
import './App.css';
import Addfriend from './components/Addfriend';
import BillShare from './components/BillShare';
import FriendsList from './components/FriendsList';
import BillDetails from './components/BillDetails';
import NewFriendShareBill from './components/NewFriendShareBill';

function App() {
  const[friends,setFriends]=useState([]);
  const[clickedFriend,setClickedFriend]=useState('')
  const addfriend=(name)=>{
    setFriends((prev)=>{
      return [...prev,{id:Date.now(),name:name,billDetails:[]}]
    })
  }
  const onFriendClicked=(friend)=>{
      setClickedFriend(friend)
  }
  const onBillDetails=(billDetails)=>{
    setFriends(friend=>calculateBill(friend,billDetails))
  }
  const calculateBill=(friend,billDetails)=>{
     const amountPrice=Math.round(+billDetails.bill/friend.length);
     const friendsDetails=[];
     for(let fr of friend)
     {
       const singleFriend={...fr};
         if(+singleFriend.id===+billDetails.friendId)
         {
             friendsDetails.push(singleFriend);
             continue;
         }
         const billings=[];
         let found=false;
         if(singleFriend.billDetails.length)
         {
           for(var billing of singleFriend.billDetails)
           {
              if(billing.id===billDetails.friendId)
              {
                found=true;
                billings.push({...billing,...{price:billing.price+amountPrice}})
              }else{
                billings.push(billing)
              }
           }
         }
         if(!found)
         {
          billings.push({id:billDetails.friendId,name:billDetails.name,price:+amountPrice})
         }
         singleFriend['billDetails']=billings;
         friendsDetails.push(singleFriend)
     }
     return friendsDetails;
  }
  return (
    <>
    <div className="container">
      <Addfriend addfriend={addfriend} />
       <BillShare friends={friends} onBillDetails={onBillDetails} />
       <FriendsList friends={friends} onFriendClicked={onFriendClicked} />
       {clickedFriend && <BillDetails clickedFriend={clickedFriend} />}
    </div>
    <br/>
    {JSON.stringify(friends)}
    <br/>
    <NewFriendShareBill/>
    </>
  );
}

export default App;
