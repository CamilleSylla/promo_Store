import React from 'react';

//style
import './Nav.css'

//assets

import ID from '../../../assets/Logos/IconicDevLatest.svg'
import Cart from '../../../assets/Icons/cart.svg'
import Man from '../../../assets/Icons/man.svg'
import Search from '../../../assets/Icons/search.svg'
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        return pathname === "/";
    }
    return (
        <nav id="topnav">
            <Link id='navLogo' to="/">
                <img src={ID} alt="logo" />
            </Link>
            <ul>

                <NavLink
                    isActive={checkActive}
                    to="/"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/shop"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Collection
                </NavLink>
                <NavLink
                    to="/shop"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Accessoires
                </NavLink>

                <NavLink
                    to="/apropos"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    A Propos
                </NavLink>
            </ul>
            <div className="nav-icons">

                <img src={Search} alt="icons" />
                <Link to='/user'>
                    <img src={Man} alt="icons" />
                </Link>
                <img src={Cart} alt="icons" />
            </div>
        </nav>
    )
}