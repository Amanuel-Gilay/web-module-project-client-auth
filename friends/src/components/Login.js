import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const initialValues = { username:'', password:''};

 function login() {
     const { push } = useHistory();
     const [formValues, setFormValues] = useState(initialValues);
        const handleChanges = (e)=>{
            setFormValues({ ...setFormValues, [e.target.name]: e.target.value});
        } 

        const handleSubmit = (e) => {
            e.preventDefault();
            axios
            .post("http://localhost:5000/api/login",formValues)
            .then((res)=> {

               window.localStorage.setItem('token', res.data.oayload);
               push("/friends");
            })
            .catch((err)=> console.log(err.message));
        };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="uesrname">Username</label>
            <input 
                id="username" 
                name="username"
                value={formValues.username} 
                onChange={handleChanges}
            />
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                name="password"
                //type="password"
                value={formValues.password} 
                onChange={handleChanges}
                />
                <button>Login</button>
        </form>
    )
}

export default login;