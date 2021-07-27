import e from 'cors';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    name: '',
    age: '',
    email: '',
}

function AddFriendForm() {
    const { push } = useHistory()
    const [formValues, setFormValues] = React.useState(initialValues);

    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value});

    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/api/friends', formValues)
          .then((res)=> {
              push('/friends');
          })
          .catch((err) => console.log({ err }))
    }
   
    return (
        <div>
           <h3>Add New Friend</h3> 
           <form onSubmit={handleSubmit}>
               <labe htmlFor="name">Name</labe>
               <input
               id="name"
               name="name"
               value={formValues.name}
               onchange={handleChanges}
               />
               <labe htmlFor="age">Age</labe>
               <input
               id="age"
               name="age"
               value={formValues.name}
               onchange={handleChanges}
               />
               <labe htmlFor="email">Email</labe>
               <input
               id="email"
               name="email"
               value={formValues.name}
               onchange={handleChanges}
               />
               <button>Add Friend</button>
           </form>
        </div>
    )
}

export default AddFriendForm