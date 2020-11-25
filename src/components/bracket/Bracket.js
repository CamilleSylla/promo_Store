import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Bracket.css';

import { IsLoggedContext } from '../../context/IsLogged';
import { BracketContext } from '../../context/BrackContext'
import Paypal from '../Paypal/Paypal';
import { UserContext } from '../../context/UserContext';

export default function Bracket() {
    const [log, setLog] = useContext(IsLoggedContext);
    const [bracket, setBracket] = useContext(BracketContext)
    const [user, setUser] = useContext(UserContext)
    const [finalOrder, setFinalOrder] = useState([])
    


    const Amount = () => {
        const amount = finalOrder.map(quantity => {
            return bracket.reduce((acc, obj) => acc + obj.price*quantity.quantity, 0)
        })
        const round = Math.round(amount[0] * 100) / 100
        return round
        
    }
    function verifyOrder () {
        console.log(user);
        const Order = {
            last_name: user.last_name ,
            first_name: user.first_name,
            client_id: user._id,
            email: user.email,
            adresse: user.adresse,
            city: user.city,
            articles: finalOrder,
            total: Amount()
        }
        console.log(Order);
    axios.patch(`/api/produit/stock`, Order).then(res => {
         if (res.data === true) {
            axios.post(`/api/newOrders`, Order).then(res => {
                console.log(res);
            })
        }
    })
    }
    console.log(finalOrder);

    function items() {
        return bracket.map((details, i) => {
            const sizeEvent = (e) => {
                if (finalOrder.length > 0 ) {
                    const found = finalOrder.find(target => target._id === e.target.id)
                    if (found === undefined) {
                        bracket.forEach(item => {
                            if (e.target.id === item._id) {
                                setFinalOrder([
                                    ...finalOrder,{
                                        _id: item._id,
                                        name: item.name,
                                        image: item.image,
                                        size: e.target.value.toLowerCase(),
                                        quantity: ""}
                                ])
                            } 
                        })
                    }else {
                        found.size = e.target.value.toLowerCase()
                    }
                    
                } else {
                    bracket.forEach(item => {
                        if (e.target.id === item._id) {
                            setFinalOrder([{
                                ...finalOrder,
                                    _id: item._id,
                                    name: item.name,
                                    image: item.image,
                                    size: e.target.value.toLowerCase(),
                                    quantity: ""
                            }])
                        }
                    })
                }
            }

            const quantityEvent = (e) => {
                console.log(e.target.id);
                if (finalOrder.length > 0 ) {
                    const found = finalOrder.find(target => target._id === e.target.id)
                    if (found === undefined) {
                        bracket.forEach(item => {
                            if (e.target.id === item._id) {
                                setFinalOrder([
                                    ...finalOrder,{
                                        _id: item._id,
                                        image: item.image,
                                        name: item.name,
                                        size: "",
                                        quantity: e.target.value.toLowerCase()}
                                ])
                            } 
                        })
                    }else {
                        found.quantity = e.target.value.toLowerCase()
                    }
                    
                } else {
                    bracket.forEach(item => {
                        if (e.target.id === item._id) {
                            setFinalOrder([{
                                ...finalOrder,
                                    _id: item._id,
                                    image: item.image,
                                    name: item.name,
                                    size: "",
                                    quantity: e.target.value.toLowerCase()
                            }])
                        }
                    })
                }
            }
            const sizeLabel = ["s", "m", "l", "xl", "unique"]
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
                            <button onClick={verifyOrder}>Verify</button>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}


