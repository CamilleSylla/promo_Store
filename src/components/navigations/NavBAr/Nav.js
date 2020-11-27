import React, { useContext } from 'react';

//style
import './Nav.css'

//assets

import ID from '../../../assets/Logos/IconicDevLatest.svg'
import Cart from '../../../assets/Icons/cart.svg'
import Man from '../../../assets/Icons/man.svg'
import Search from '../../../assets/Icons/search.svg'
import { Link, NavLink } from 'react-router-dom';
import { IsLoggedContext } from '../../../context/IsLogged';
import { UserContext } from '../../../context/UserContext';

export default function Nav() {
    const [log, setLog] = useContext(IsLoggedContext)
    const [user, setUser] = useContext(UserContext)
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        return pathname === "/";
    }
    function connected() {
        if (log === true) {
            return (
                <NavLink
                    to="/user"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    {user.first_name + " " + user.last_name}
                </NavLink>
            )
        } else {
            return (
                <NavLink
                    to="/login"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Connection
                </NavLink>
            )
        }
    }

     const Deco = () => {
         setLog({});
         setUser({});
     }

    function RegiDec () {
        if (log === true) {
            return (
                <li onClick={() => Deco()}>Déconnexion</li>
            )
        } else {
            return (
                <NavLink
                    to="/login"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Inscription
                </NavLink>
            )
        }
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
                    to="/apropos"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    A Propos
                </NavLink>

                {connected()}
                {RegiDec()}
            </ul>
            <div className="nav-icons">

                <Link to='/user'>
                    <img src={Man} alt="icons" />
                </Link>
                <Link to='/panier'>
                    <img src={Cart} alt="icons" />
                </Link>
            </div>
        </nav>
    )
}