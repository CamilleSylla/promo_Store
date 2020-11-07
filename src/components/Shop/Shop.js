import React from 'react';
import ShopNav from './Nav/Nav';

import './Shop.css'
import Views from './Views/Views';

export default function Shop () {


    
    return (
        <div className="shopContainer">
            <div className="shopGrid">
                <ShopNav/>
                <Views/>
            </div>
        </div>
    )
}