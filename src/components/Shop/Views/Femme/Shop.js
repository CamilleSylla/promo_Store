import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../../context/ItemContext';
import ShopNav from '../../Nav/Nav';
import GenderNav from './Gender/Gender';
import './Shop.css'
import Views from './Views';

export default function Shop() {
    const [items, setItems] = useContext(ItemContext);
    const [views, setViews] = useState([])
    const [gender, setGender] = useState([])
    const filter = items

    

    const cat = items.map(a => a.category.toLowerCase());
    const categoryFilter = ([...new Set(cat)]);
    const genre = items.map(a => a.gender.toLowerCase());
    const genderFilter = ([...new Set(genre)]);

    return (
        <div className="shopContainer">
            <GenderNav 
            gender={genderFilter} 
            filter={filter} 
            setViews={setViews}
            genderTarget={gender}
            setGender={setGender}
            />
            <div className="shopGrid">
                <ShopNav 
                cat={categoryFilter} 
                filter={filter} 
                setViews={setViews} 
                genderTarget={gender}
                gender={genderFilter} 
                />
                <Views item={items} filtered={views}/>
            </div>
        </div>
    )
}