import React, { useContext, useEffect } from 'react';

//styles
import './Items.css'

//items
import { ItemContext } from '../../../../context/ItemContext'

export default function Items({ toShow }) {

    const [items, setItems] = useContext(ItemContext);
    const data = items
    let stuff;
    if (data.length === 0) {
        console.log("loading");
    } else {
        console.log(data);
        stuff = data.map((details, i) => {
            const { name, brand, gender, price, image, categorie } = details;
            while (gender === toShow) {
                return (
                    <div id="itemCard1">
                        <div className="itemImgWrap">
                            <img src={image} alt="first image" />
                        </div>
                        <div className="details">
                            <p className="detailsName">{name}</p>
                            <p className="brand">{brand} </p>
                            <p className="gender">{gender}</p>
                            <p className="price">{price}€</p>
                        </div>
                    </div>
                )
            }
        })
    }
    return (
        <div className="productItem">
            {stuff}
        </div>
    )

}