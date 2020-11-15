import React, { useContext } from 'react';
import { ItemContext } from '../../../context/ItemContext';

import "./Nav.css"

export default function ShopNav() {

    const [items, setItems] = useContext(ItemContext);
    const cat = items.map(a => a.category.toLowerCase());
    const categoryFilter = ([...new Set(cat)]);
    const gender = items.map(a => a.gender.toLowerCase());
    const genderFilter = ([...new Set(gender)]);

    return (
        <div className="shopNavContainer">
            <div className="shopNavFilter">
                {categoryFilter.map((details, i) => {
                    return (
                        <li>
                            {details}
                        </li>
                    )
                })}
                {genderFilter.map((details, i) => {
                    return (
                        <li>
                            {details}
                        </li>
                    )
                })}
            </div>

        </div>
    )
} 