import React from 'react';

import './NotLog.css'
import ID from '../../../assets/Logos/IconicDevLatest.svg'
import { Link } from 'react-router-dom';
export default function NotLog() {

    return (
        <div className="notlogContainer">
            <div className="notLogView">
                <img src={ID} alt="IconicDev" />
                <p> Vous dever etre connecté pour acceder a cette page</p>
                <div className="notLogButton">
                    <Link to='/login'>
                        Connection
            </Link>
                    <Link to='/register'>
                        Inscription
            </Link>
                </div>
            </div>

        </div>
    )
}