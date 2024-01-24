import React,{useState} from 'react'

const BillShare = ({friends,onBillDetails}) => {
    const[billamount,setBillamount]=useState('');
    const[selectedfriend,setSelectedfriend]=useState('')
    const submitBill=(e)=>{
      e.preventDefault();
      const singleFriend=friends.find(fr=>+selectedfriend===+fr.id);
      const billDetails={friendId:singleFriend.id,name:singleFriend.name,bill:billamount};
      onBillDetails(billDetails)
    }
  return (
    <div>
        <h3>Share Bill Details</h3>
        <form onSubmit={submitBill}>
            <div>
            <label>select friend who paid the bill:</label>
            <select value={selectedfriend} onChange={(e)=>{setSelectedfriend(e.target.value)}}>
                <option value="">select friend</option>
                {friends.map((friend)=>(
                    <option key={friend.id} value={friend.id}>{friend.name}</option>
                ))}
            </select>
            </div>
            <div>
                <label>Bill Amount:</label>
                <input type="text" value={billamount} onChange={(e)=>setBillamount(e.target.value)} />
            </div>
            <div>
                <button>Add Bill</button>
            </div>
        </form>
    </div>
  )
}

export default BillShare