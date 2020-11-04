import React from 'react';

//style
import './Sale.css'

export default function Sale() {

    return (
        <div className="saleContainer">
            <div className="saleTitle">
                <div className="saleLayer">
                    <p id="saleTag">#promotions</p>
                    <p id="saleDesc">Jusqu'à 50% de réduction sur vos articles préférer</p>
                    <a href="">Acceder {">"} </a>
                </div>
            </div>
        </div>
    )
}