import React, { useContext } from 'react'

import './Bracket.css';

import Articles from '../../assets/img/female/leggin.jpg'
import { IsLoggedContext } from '../../context/IsLogged';
import NotLog from '../User/NotLog/NotLog';

export default function Bracket() {
    const [log, setLog] = useContext(IsLoggedContext);

    function show() {
        if (log === true) {
            return (
                <div>
                    <div className="bracketPageTitle">
                        <p>#monpanier</p>
                    </div>
                    <div className="bracketGrid">
                        <div className="bracketArticles">
                            <div className="bracketArticlesViews">
                                <img src={Articles} alt="articles" />
                            </div>
                            <div className="bracketTitle">
                                <p>Name</p>
                                <p>Size </p>
                                <button>Remove</button>
                            </div>
                            <div className="bracketQuantity">
                                <div className="bracketQuantityFunction">
                                    <p>-</p>
                                    <p>Number</p>
                                    <p>+</p>
                                </div>
                                <p> Price</p>
                            </div>
                        </div>
                        <div className="bracketMenu">
                            <p> Montant total de votre panier</p>
                            <div className="bracketTotal">
                                <div className="bracketResume">
                                    <div>
                                        <p>Name</p>
                                        <p>Price</p>
                                    </div>
                                </div>
                                <div className="bracketMoney">
                                    <p>Montant TTC (TVA 20%)</p>
                                    <p>Total</p>
                                </div>
                            </div>
                            <div className="bracketPaymets">

                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            return <NotLog />
        }
    }
    return (
        <div className="bracketContainer">
            {show()}
        </div>
    )
} 