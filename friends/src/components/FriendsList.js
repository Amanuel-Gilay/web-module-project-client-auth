import React, { useState, useEffect } from 'react'
import axios from 'axios';

 function FriendsList(props) {
     const [friends, setFriends] = useState([]);

     useState(()=> {
         axios
         .get("http://localhost:5000/api/friends")
         .then((res)=>console.log(res))
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