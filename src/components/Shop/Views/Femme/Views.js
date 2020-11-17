import React, { useContext, useEffect, useState } from 'react';
import './Views.css'
//items
import { ItemContext } from '../../../../context/ItemContext'
import { OverviewContext } from '../../../../context/OverviewContext';

//assets
import Eye from '../../../../assets/Icons/eye.svg'
import Cart from '../../../../assets/Icons/cart.svg'
import { Link } from 'react-router-dom';

export default function Views({ item, filtered }) {
    const [target, setTarget] = useContext(OverviewContext)
    const userTarget = (e) => {
        console.log(e.target.value);
        const userTarget = item.filter((i) => {
            return i._id.match(e.target.value)
        })
        
        setTarget(userTarget)
        console.log(userTarget);
    }
    console.log(target);
    function show() {
        if (filtered.length > 0) {
            return filtered.map((details, i) => {
                return (
                    <div className="shopItemContainer" >
                        <div className="shopItemImg">
                            <img src={details.image} alt={details.name} />
                        </div>
                        <div className="shopDetails">
                            <p className="detailsName">{details.name}</p>
                            <p className="brand">{details.category}</p>
                            <p className="gender">{details.gender}</p>
                            <p className="price">{details.price} €</p>
                            <button onClick={userTarget} value={details._id}>Inspecter</button>
                        </div>
                    </div>
                )
            })

        } else {
            return item.map((details, i) => {
                return (
                    <div className="shopItemContainer" >
                        <div className="shopItemImg">
                            <img src={details.image} alt={details.name} />
                        </div>
                        <div className="shopDetails">
                            <div className="shopInfos">
                                <p className="detailsName">{details.name}</p>
                                <p className="brand">{details.category}</p>
                                <p className="gender">{details.gender}</p>
                                <p className="price">{details.price} €</p>
                            </div>
                            <div className="shopItemOverview">
                                <Link to="/overview">
                                    <input type="image" src={Eye} alt="overview" onClick={userTarget} value={details._id} />
                                </Link>

                                <input type="image" src={Cart} alt="overview" />
                            </div>
                        </div>
                    </div>

                )
            })
        }
    }



    return (
        <div className="viewsContainer">
            <div className="viewsGrid">
                {show()}
            </div>
        </div>
    )
}