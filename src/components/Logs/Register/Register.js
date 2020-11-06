import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './Register.css'

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
                                <input onChange={nomChange} />

                                <p>Prénom :</p>
                                <input onChange={prenomChange} />
                            </div>


                            <p>Adresse :</p>
                            <input onChange={adresseChange} />
                            
                            <p>Ville :</p>
                            <input onChange={villeChange} />

                            <p>Sexe:</p>
                            <input onChange={sexeChange} />

                            <p>Email</p>
                            <input onChange={emailChange} />

                            <p>Mot de Passe</p>
                            <input onChange={passwordChange} />
                            <button onClick={onSubmit}>M'inscrire</button>
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