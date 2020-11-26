import React from 'react';

//style
import './Menu.css'

export default function Menu ({click}) {

    const Gender = (e) => {
        click({gender: e.target.value})
    }
    const Cat = (e) => {
        click({category: e.target.value})
    }

    return (

        <div className="productMenu">
            <h6>#nostendances</h6>
            <p> Lorem ipsem foruim gretaut stuck on blakortis malko estova klako</p>
            <ul>
                <input type="button" onClick={Gender}value="Homme"/>
                <input type="button" onClick={Gender}value="Femme"/>
                <input type="button" onClick={Cat}value="accessoire"/>
            </ul>
        </div>
    )
}