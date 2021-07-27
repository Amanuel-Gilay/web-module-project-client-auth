import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

 function FriendsList(props) {
     const [friends, setFriends] = useState([]);

     useState(()=> {
         axiosWithAuth()
         .get("http://localhost:5000/api/friends")
         .then((res)=>{
             setFriends(res.data);
         })
         .catch((err)=> console.log({ err }))
     }, []);
    return (
        <div>
            <h3>Current Friends</h3>
            { friends.map((friend)=>(
                <p key={friend.id}>{friend.map}</p>
            ))}
        </div>
    )
}

export default FriendsList