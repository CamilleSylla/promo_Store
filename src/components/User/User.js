import React, { useContext } from 'react';
import { IsLoggedContext } from '../../context/IsLogged';
import { UserContext } from '../../context/UserContext';
import NotLog from './NotLog/NotLog';

import './User.css'

export default function User() {
    const [log, setLog] = useContext(IsLoggedContext);
    const [user, setUser] = useContext(UserContext)
    function show() {
        if (log === true) {
            return (
                <div className="userGrid">
                    <div className="userTitle">
                        <p>N° Client : {user._id}</p>
                        <h6>Bonjour : {user.last_name + " " + user.first_name}</h6>
                    </div>
                    <div className="userInfos">
                        <h6>Mes Infos</h6>
                        <p>Nom : {user.last_name} </p>
                        <p>Prénom : {user.first_name}</p>
                        <p>E-mail : {user.email}</p>
                        <p>Adresse : {user.adresse}</p>
                        <p>Ville : {user.city}</p>
                        <button> Modifier </button>
                    </div>
                    <div className="userOrders"> Mes Commandes</div>

                </div>
            )
        } else {
            return <NotLog />
        }
    }
    return (
        <div className="userContainer">
            {show()}
        </div>
    )
}