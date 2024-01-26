import React from 'react'

const FriendsList = ({friends,onFriendClicked}) => {
    const FriendClicked=(friend)=>{
        onFriendClicked(friend)
    }
  return (
    <div>
        <h3>Friends List</h3>
        <ul>
            {friends.map((friend,index)=>(
                <li key={friend.id} onClick={()=>FriendClicked(friend)}>{friend.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FriendsList