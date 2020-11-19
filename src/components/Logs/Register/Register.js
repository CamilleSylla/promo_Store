import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './Register.css'
import { Link } from 'react-router-dom';

export default function Register() {
    const [register, setRegister] = useState({
        last_name: "",
        first_name: "",
        adresse: "",
        city: "",
        gender: "",
        email: "",
        password: ""
    });

    const nomChange = event => {
        setRegister({ ...register, last_name: event.target.value })
    }
    const prenomChange = event => {
        setRegister({ ...register, first_name: event.target.value })
    }
    const adresseChange = event => {
        setRegister({ ...register, adresse: event.target.value })
    }
    const villeChange = event => {
        setRegister({ ...register, city: event.target.value })
    }
    const sexeChange = event => {
        setRegister({ ...register, gender: event.target.value })
    }
    const emailChange = event => {
        setRegister({ ...register, email: event.target.value })
    }

    const passwordChange = event => {
        setRegister({ ...register, password: event.target.value })
    }


    const onSubmit = () => {
        axios.post(`/api/user/register`, register)
            .then(res => {
                console.log(register);
                console.log(res.data);
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
                            <h3> Inscription </h3>
                            <div className="registerName">
                                <p>Nom :</p>
                                <input className="registerField" onChange={nomChange} />

                                <p>Prénom :</p>
                                <input className="registerField" onChange={prenomChange} />
                            </div>


                            <p>Adresse :</p>
                            <input className="registerField" onChange={adresseChange} />
                            
                            <p>Ville :</p>
                            <input className="registerField" onChange={villeChange} />

                            <p>Sexe:</p>
                            <input className="registerField" onChange={sexeChange} />

                            <p>Email</p>
                            <input className="registerField" onChange={emailChange} />

                            <p>Mot de Passe</p>
                            <input className="registerField" onChange={passwordChange} />
                            <Link to="/" >
                                <input 
                                className="loginConnection" 
                                type="button" 
                                onClick={onSubmit} 
                                value="M'enregister"/>
                            </Link>
                            <a className="noAccount">
                                Déjà un compte ? Cliquez ici !
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}