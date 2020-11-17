import React, { useContext } from 'react';
import { BracketContext } from '../../context/BrackContext';
import { OverviewContext } from '../../context/OverviewContext';

import './Overview.css'

export default function Overview() {
    const [bracket, setBracket] = useContext(BracketContext)
    const [target, setTarget] = useContext(OverviewContext)
    const addToCart = () => {
        target.map((details, i) => {
                setBracket([...bracket, details])
                console.log(bracket);
        })
    }
    return (
        <div className="overviewContainer">
            {target.map((details, i) => {
                return (
                    <div className="overviewGrid">
                        <img src={details.image} alt={details.name} />
                        <div className="overviewItemInfo">
                            <h1>{details.name}</h1>
                            <h2>{details.category}</h2>
                            <h4> {details.gender} </h4>
                            <p> {details.price} € </p>
                            <input 
                            type="button" 
                            value="Ajouter au Panier"
                            onClick={addToCart}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}