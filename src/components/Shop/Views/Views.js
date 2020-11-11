import React, { useContext, useEffect, useState } from 'react';


import './Views.css'
import Pic from '../../../assets/img/female/leggin.jpg';
//items
import { ItemContext } from '../../../context/ItemContext'

export default function Views() {
    const [items, setItems] = useContext(ItemContext);
    console.log(items);
    const data = items
    let stuff;
    if (data.length === 0) {
        console.log("nothing");
    } else {
        console.log(data);
        stuff = data.map((details, i) => {
            const { name, brand, gender, price, image, categorie } = details;

            return (
            <div className="shopItemContainer">
                    <div className="shopItemImg">
                        <img src={image} alt={name} />
                    </div>
                    <div className="shopDetails">
                        <p className="detailsName">{name}</p>
                        <p className="brand">{brand}</p>
                        <p className="gender">{gender}</p>
                        <p className="price">{price} €</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="viewsContainer">
            <div className="viewsGrid">
                {stuff}
            </div>
        </div>
    )
}