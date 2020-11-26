import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../context/ItemContext';
import Items from './items/Items';
import Menu from './Menu/Menu';

//styles
import './Products.css'

export default function Products() {
    const [items, setItems] = useContext(ItemContext);
    const [categorie, setCategorie] = useState({})
    function find() {
        let selectedData = [...items]
        if (Object.keys(categorie).length <= 0 ) {
            selectedData = items
        } else {
            for (const property in categorie) {
                selectedData = selectedData.filter(o => o[property].toLowerCase() === categorie[property].toLowerCase());
              }
            }
            return selectedData
    }
    return (
        <div>
            <div className="productContainer">
                <Menu click={setCategorie}/>
            </div>
            <div className="itemContainer">
                <Items toShow={find()}/>
            </div>
        </div>

    )
}