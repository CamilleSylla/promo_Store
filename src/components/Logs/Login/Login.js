import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login ({token}) {
const [login, setLogin] = useState({
    email: "",
    password: ""
});

    const emailChange = event => {
        setLogin({...login, email: event.target.value})
    }

    const passwordChange = event => {
        setLogin({...login, password: event.target.value})
    }


    const onSubmit =  () => {
        axios.post(`/api/user/login`, login )
        .then( res => {
            
            window.location.replace("/");
            console.log(res.data);
            token(res.data);
        })
    }
    

    return (
        <div>
            <p> Email</p>
        <input onChange={emailChange}/>
            <p> password</p>
        <input onChange={passwordChange}/>
        <button onClick={onSubmit}>
            Connection
        </button>
        </div>
        
    )
}