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
        const filter = data.filter((i) => {
            return i.gender.toLowerCase().match(toShow.toLowerCase())
        })
        

        stuff = filter.map((details, i) => {
            while (i <= 2) {
                return (
                    <div className="itemCard1">
                        <div className="itemImgWrap">
                            <img src={details.image} alt="first image" />
                        </div>
                        <div className="details">
                            <p className="detailsName">{details.name}</p>
                            <p className="brand">{details.brand} </p>
                            <p className="gender">{details.category}</p>
                            <p className="price">{details.price}€</p>
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