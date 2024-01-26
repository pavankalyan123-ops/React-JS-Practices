import React from 'react'

const BillDetails = ({clickedFriend}) => {
  return (
    <div>
        <h3>Bill Details that should be given by {clickedFriend.name}</h3>
        <ul>
            {clickedFriend.billDetails.map((bill)=>(
                <li key={bill.friendId}>you need to pay {bill.price} to {bill.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default BillDetails