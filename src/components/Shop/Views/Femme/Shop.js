import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../../context/ItemContext';
import ShopNav from '../../Nav/Nav';
import './Shop.css'
import Views from './Views';

export default function Shop() {
    const [items, setItems] = useContext(ItemContext);
    const [filterObj, setFilterObj ] = useState({})
    
    function find() {
        let selectedData = [...items]
        if (Object.keys(filterObj).length <= 0 ) {
            selectedData = items
        } else {
            for (const property in filterObj) {
                selectedData = selectedData.filter(o => o[property].toLowerCase() === filterObj[property].toLowerCase());
              }
            }
            return selectedData
    }

    const genre = items.map(a => a.gender.toLowerCase());
    const genderFilter = ([...new Set(genre)]);

    return (
        <div className="shopContainer">
            <div className="shopTopSpacing">
                Il est l'heure d'alimenter votre style...
            </div>
            
            <div className="shopGrid">
                <ShopNav 
                filterObj={filterObj}
                filtered={find()}
                setFilterObj = {setFilterObj}
                />
                <Views item={items} filtered={find()}/>
            </div>
        </div>
    )
}