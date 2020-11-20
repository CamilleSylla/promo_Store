import React, { useContext, useEffect, useState } from 'react'

import './Bracket.css';

import { IsLoggedContext } from '../../context/IsLogged';
import { BracketContext } from '../../context/BrackContext'
import Paypal from '../Paypal/Paypal';
export default function Bracket() {
    const [log, setLog] = useContext(IsLoggedContext);
    const [bracket, setBracket] = useContext(BracketContext)
    const [sizes, setSizes] = useState({
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
    })
    let Order;
    console.log(bracket);
    const Amount = () => {
        const multiply = sizes.s + sizes.m + sizes.l + sizes.xl
        console.log(multiply);
        return bracket.reduce((acc, obj) => acc + obj.price*multiply,0)
    }
    function items() {
        return bracket.map((details, i) => {
            const addS = () => {
                setSizes({...sizes, s: sizes.s +1 })
            }
            const minusS = () => {
                setSizes({...sizes, s: sizes.s -1 })
            }
            const addM = () => {
                setSizes({...sizes, m: sizes.m +1 })
            }
            const minusM = () => {
                setSizes({...sizes, m: sizes.m -1 })
            }
            const addL = () => {
                setSizes({...sizes, l: sizes.l +1 })
            }
            const minusL = () => {
                setSizes({...sizes, l: sizes.l -1 })
            }
            const addXL = () => {
                setSizes({...sizes, xl: sizes.xl +1 })
            }
            const minusXL = () => {
                setSizes({...sizes, xl: sizes.xl -1 })
            }

            Order = {
                _id: details._id,
                name: details.name,
                s: sizes.s,
                m: sizes.m,
                l: sizes.l,
                xl: sizes.xl
            }
            return (

                <div className="bracketArticles">
                    <div className="bracketArticlesViews">
                        <img src={details.image} alt="articles" />
                    </div>
                    <div className="bracketSpacing">
                        <div className="bracketTitle">
                            <p>{details.name}</p>
                            <button value={details._id} onClick={addS}>+</button>
                            <p>S: {sizes.s}</p>
                            <button value={details._id} onClick={minusS}> - </button>
                            <button value={details._id} onClick={addM}>+</button>
                            <p>M: {sizes.m}</p>
                            <button value={details._id} onClick={minusM}> - </button>
                            <button value={details._id} onClick={addL}>+</button>
                            <p>L: {sizes.l}</p>
                            <button value={details._id} onClick={minusL}> - </button>
                            <button value={details._id} onClick={addXL}>+</button>
                            <p>XL: {sizes.xl}</p>
                            <button value={details._id} onClick={minusXL}> - </button>
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
        items();
        order();
        Amount();
        console.log(Order);
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


