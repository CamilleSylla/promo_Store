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
            for (let x = 0 ;details.gender.toLowerCase().match(toShow.toLowerCase()); x++) {
                  
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
                    console.log(details);
                    
                
            }
        })
    }
    return (
        <div className="productItem">
            {stuff}
        </div>
    )

}