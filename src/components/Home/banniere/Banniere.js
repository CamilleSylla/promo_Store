import React from 'react';

import './Banniere.css'

export default function Banniere() {

    return (
        <div className="banniere">
            <div id="card1">
                <div id="cardLayer1">
                <div className="banniereText">
                    <h2>#elle</h2>
                    <p>Nouvelles tendance 2020</p>

                    <a href="">Découvrir</a>
                </div>
                </div>
                
            </div>
            <div id="card2">
            <div id="cardLayer2">
                <div className="banniereText">
                    <h2>#accessoires</h2>
                    <p>Chaque details compte</p>

                    <a href="">Découvrir</a>
                    </div>
                </div>
            </div>
            <div id="card3">
            <div id="cardLayer3">
                <div className="banniereText">
                    <h2>#lui</h2>
                    <p>Soyez distingué</p>

                    <a href="">Découvrir</a>
                    </div>
                </div>
            </div>
        </div>
    )
}