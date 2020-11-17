import React, { useContext } from 'react'

import './Bracket.css';

import Articles from '../../assets/img/female/leggin.jpg'
import { IsLoggedContext } from '../../context/IsLogged';
import NotLog from '../User/NotLog/NotLog';
import { BracketContext } from '../../context/BrackContext'
export default function Bracket() {
    const [log, setLog] = useContext(IsLoggedContext);
    const [bracket, setBracket] = useContext(BracketContext)
    console.log(bracket);
    const Amount = () => {
        return bracket.reduce((acc, obj) => acc + obj.price, 0)
    }
    function items() {
        if (log === true) {
            return bracket.map((details, i) => {
                return (

                    <div className="bracketArticles">
                        <div className="bracketArticlesViews">
                            <img src={details.image} alt="articles" />
                        </div>
                        <div className="bracketSpacing">
                            <div className="bracketTitle">
                                <p>{details.name}</p>
                                <p>Size </p>
                                <button>Remove</button>
                                <div className="bracketQuantityFunction">
                                    <p>-</p>
                                    <p>Number</p>
                                    <p>+</p>
                                </div>
                                <p> {details.price} €</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    function order() {
        if (log === true) {
            return bracket.map((details, i) => {
                return (
                    <div>
                        <p>{details.name}</p>
                        <p>{details.price} €</p>
                    </div>
                )
            })
        }
    }
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
                        <div className="bracketPaymets">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


