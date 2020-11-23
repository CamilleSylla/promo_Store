import React, { useContext, useEffect, useState } from 'react'

import './Bracket.css';

import { IsLoggedContext } from '../../context/IsLogged';
import { BracketContext } from '../../context/BrackContext'
import Paypal from '../Paypal/Paypal';
export default function Bracket() {
    const [log, setLog] = useContext(IsLoggedContext);
    const [bracket, setBracket] = useContext(BracketContext)
    const [finalOrder, setFinalOrder] = useState([])


    const Amount = () => {
        return bracket.reduce((acc, obj) => acc + obj.price, 0)
    }


    function items() {
        return bracket.map((details, i) => {
            const sizeEvent = (e) => {
                console.log(e.target.id);
                if (finalOrder.length > 0 ) {
                    const found = finalOrder.find(target => target._id === e.target.id)
                    console.log(found);
                    if (found === undefined) {
                        bracket.forEach(item => {
                            if (e.target.id === item._id) {
                                setFinalOrder([
                                    ...finalOrder,{
                                        _id: item._id,
                                        name: item.name,
                                        size: e.target.value,
                                        quantity: ""}
                                ])
                                console.log(finalOrder);
                            } 
                        })
                    }else {
                        found.size = e.target.value
                        console.log(finalOrder);
                    }
                    
                } else {
                    bracket.forEach(item => {
                        if (e.target.id === item._id) {
                            setFinalOrder([{
                                ...finalOrder,
                                    _id: item._id,
                                    name: item.name,
                                    size: e.target.value,
                                    quantity: ""
                            }])
                            console.log(finalOrder);
                        }
                    })
                }

            }
            const quantityEvent = (e) => {
                console.log(e.target.id);
                if (finalOrder.length > 0 ) {
                    const found = finalOrder.find(target => target._id === e.target.id)
                    console.log(found);
                    if (found === undefined) {
                        bracket.forEach(item => {
                            if (e.target.id === item._id) {
                                setFinalOrder([
                                    ...finalOrder,{
                                        _id: item._id,
                                        name: item.name,
                                        size: "",
                                        quantity: e.target.value}
                                ])
                                console.log(finalOrder);
                            } 
                        })
                    }else {
                        found.quantity = e.target.value
                        console.log(finalOrder);
                    }
                    
                } else {
                    bracket.forEach(item => {
                        if (e.target.id === item._id) {
                            setFinalOrder([{
                                ...finalOrder,
                                    _id: item._id,
                                    name: item.name,
                                    size: "",
                                    quantity: e.target.value
                            }])
                            console.log(finalOrder);
                        }
                    })
                }
            }

            const sizeLabel = ["S", "M", "L", "XL"]
            const quantityLabel = ["1", "2", "3"]
            const selectSizes = sizeLabel.map((sizes, i) => {
                return (
                    <option value={sizes} id={details._id} onClick={sizeEvent}>{sizes}</option>
                )
            })
            const selectQuantity = quantityLabel.map((quantity, i) => {
                return (
                    <option value={quantity} id={details._id} onClick={quantityEvent}> {quantity} </option>
                )
            })

            return (

                <div className="bracketArticles" >
                    <div className="bracketArticlesViews">
                        <img src={details.image} alt="articles" />
                    </div>
                    <div className="bracketSpacing">
                        <div className="bracketTitle">
                            <p>{details.name}</p>
                            <select name="size">
                                {selectSizes}
                            </select>
                            <select>
                                {selectQuantity}
                            </select>

                            <button>Remove</button>
                            <div className="bracketQuantityFunction">
                                <p>-</p>
                                <p>Number</p>
                                <p>+</p>
                            </div>
                            <p> {details.price} €</p>
                        </div>
                    </div>

                </div >
            )
        })
    }
    function order() {
        return bracket.map((details, i) => {
            return (
                <div>
                    <p>{details.name}</p>
                    <p>{details.price} €</p>
                </div>
            )
        })
    }

    useEffect(() => {
        Amount();
        items();
    })
    return (
        <div className="bracketContainer">
            <div className="bracketPageTitle">
                <p>#monpanier</p>
            </div>
            <div className="bracketGrid">
                {items()}
                <div className="bracketMenu">
                    <p> Montant total de votre panier</p>
                    <div className="bracketTotal">
                        <div className="bracketResume">
                            {order()}
                        </div>
                        <div className="bracketMoney">
                            <p>Montant TTC (TVA 20%)</p>
                            <p>{Amount()} €</p>
                        </div>
                        <div className="bracketPaypal">
                            <Paypal price={Amount} />
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}


