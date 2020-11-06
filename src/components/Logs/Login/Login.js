import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext'

import './Login.css'

export default function Login({ token }) {
    const [user, setUser] =  useContext(UserContext);

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
            .then( async res => {
                console.log(res.data);
                const data = res.data.header
                await setUser([data]);
                console.log(user);
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