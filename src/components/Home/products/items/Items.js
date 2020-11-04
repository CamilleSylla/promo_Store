import React from 'react';

//styles
import './Items.css'

//database
import db from '../productDb'

export default function Items({toShow}) {
    const data = db.map((item, i) => {
        const { name, brand, gender, price, image, categorie } = item;
        
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
        
        
        
    }
    )
    return (
        <div className="productItem">
            {data}
        </div>
    )

}