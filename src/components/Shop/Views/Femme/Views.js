import React, { useContext, useEffect, useState } from 'react';


import './Views.css'
//items
import { ItemContext } from '../../../../context/ItemContext'

export default function Views({item, filtered}) {
    

    function show () {
        if (filtered.length > 0 ) {
            return filtered.map((details, i) => {
                return (
                    <div className="shopItemContainer">
                        <div className="shopItemImg">
                            <img src={details.image} alt={details.name} />
                        </div>
                        <div className="shopDetails">
                            <p className="detailsName">{details.name}</p>
                            <p className="brand">{details.category}</p>
                            <p className="gender">{details.gender}</p>
                            <p className="price">{details.price} €</p>
                        </div>
                    </div>
                )
            })
            
        } else {
            return item.map((details, i) => {
                return (
                    <div className="shopItemContainer">
                        <div className="shopItemImg">
                            <img src={details.image} alt={details.name} />
                        </div>
                        <div className="shopDetails">
                            <p className="detailsName">{details.name}</p>
                            <p className="brand">{details.category}</p>
                            <p className="gender">{details.gender}</p>
                            <p className="price">{details.price} €</p>
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