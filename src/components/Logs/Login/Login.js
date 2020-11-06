import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './Login.css'

export default function Login({ token }) {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const emailChange = event => {
        setLogin({ ...login, email: event.target.value })
    }

    const passwordChange = event => {
        setLogin({ ...login, password: event.target.value })
    }


    const onSubmit = () => {
        axios.post(`/api/user/login`, login)
            .then(res => {

                window.location.replace("/");
                console.log(res.data);
                token(res.data);
            })
    }


    return (
        <div className="loginOverlay">
            <div className="loginContainer">
                <div className="loginGrid">
                    <div className="sideImg">

                    </div>
                    <div className="loginForm">
                        <div className="loginFormContainer">
                            <h3> Connection </h3>
                            <p>Email</p>
                            <input onChange={emailChange} />

                            <p>Mot de Passe</p>
                            <input onChange={passwordChange} />
                            <button onClick={onSubmit}> Connection</button>

                            <a className="noAccount">
                                Pas encore de compte ? Cliquez ici !
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}