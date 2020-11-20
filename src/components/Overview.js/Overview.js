import React, { useContext, useState } from 'react';
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
                console.log(details);
                function Sizes () {
                    const newSizes = [details.s, details.m, details.l, details.xl]
                    const sizesQuantity = newSizes.map((quantity, i) => {
                        if (quantity > 0) {
                            const Tailles = ["S", "M", "L", "XL"]
                            return (
                                <div className="sizesContainer">
                                    <p>
                                        {Tailles[i]} : {quantity}
                                    </p>
                                </div>
                            )
                        }
                    })
                    return sizesQuantity
                }
                            

                return (
                    <div className="overviewGrid">
                        <img src={details.image} alt={details.name} />
                        <div className="overviewItemInfo">
                            <h1>{details.name}</h1>
                            <h2>{details.brand}</h2>
                            <h3>{details.category}</h3>
                            <h4> {details.gender} </h4>
                            <p> {details.price} € </p>
                            <p> Tailles en stock :</p>
                            {Sizes()}
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