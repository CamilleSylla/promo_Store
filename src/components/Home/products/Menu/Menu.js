import React from 'react';

//style
import './Menu.css'

export default function Menu ({click}) {

    return (

        <div className="productMenu">
            <h6>#nostendances</h6>
            <p> Lorem ipsem foruim gretaut stuck on blakortis malko estova klako</p>
            <ul>
                <li onClick={ () => click("homme")}>Homme</li>
                <li onClick={ () => click("femme")}>Femme</li>
                <li onClick={ () => click("accessories")}>Accessoires</li>
            </ul>
        </div>
    )
}