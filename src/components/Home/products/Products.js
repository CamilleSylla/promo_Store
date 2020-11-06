import React, { useState } from 'react';
import Items from './items/Items';
import Menu from './Menu/Menu';

import db from './productDb'

//styles
import './Products.css'

export default function Products() {
    const [categorie, setCategorie] = useState("homme")
    return (
        <div>
            <div className="productContainer">
                <Menu click={setCategorie}/>
            </div>
            <div className="itemContainer">
                <Items toShow={categorie}/>
            </div>
        </div>

    )
}