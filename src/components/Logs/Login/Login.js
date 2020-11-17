import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext'

import './Login.css'
import { TokenContext } from '../../../context/TokenContext';
import { Link } from 'react-router-dom';
import { IsLoggedContext } from '../../../context/IsLogged';

export default function Login() {
    const [user, setUser] =  useContext(UserContext);
    const [token, setToken] = useContext(TokenContext)
    const [log, setLog] = useContext(IsLoggedContext)
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
            .then(async res => {
                await setToken(res.headers.authtoken)
                 await setUser(res.data)
                if(res.data._id) {
                    await setLog(true)
                    console.log(log);
                }
                console.log(user);
                console.log(token);
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
                            <Link to="/" onClick={onSubmit}>Connection</Link>

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