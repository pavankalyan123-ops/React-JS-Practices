import React from 'react'

const FriendsList = ({friends}) => {
  return (
    <div>
        <h3>Friends List</h3>
        <ul>
            {friends.map((friend,index)=>(
                <li key={friend.id}>{friend.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FriendsList