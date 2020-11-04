import React from 'react';

//style
import './Nav.css'

//assets

import ID from '../../../assets/Logos/IconicDevLatest.svg'
import Cart from '../../../assets/Icons/cart.svg'
import Man from '../../../assets/Icons/man.svg'
import Search from '../../../assets/Icons/search.svg'

export default function Nav() {

    return (
        <nav id="topnav">
            <img src={ID} alt="logo" id='navLogo'/>
            <ul>
                <li>Accueil</li>
                <li>Collections</li>
                <li>Accessoires</li>
                <li>A Props</li>
            </ul>
            <div className="nav-icons">
                <img src={Search} alt="icons" />
                <img src={Man} alt="icons" />
                <img src={Cart} alt="icons" />
            </div>
        </nav>
    )
}