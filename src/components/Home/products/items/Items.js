import React, { useContext, useEffect } from 'react';

//styles
import './Items.css'

//items
import { ItemContext } from '../../../../context/ItemContext'

export default function Items({toShow}) {
   
    const [items, setItems] =  useContext(ItemContext);
    

    
    const data = items.map( (item, i) => {
        console.log(item.length);
        for(var i = 0; i <= item.length; i++){
            const { name, brand, gender, price, image, categorie } = item[i];
                console.log(gender);
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
                
            }
            )
    return (
        <div className="productItem">
            {data}
        </div>
    )

}