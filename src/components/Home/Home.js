import React from 'react';

import './Home.css'
import Banniere from './banniere/Banniere'
import Products from './products/Products';
import Sale from './sale/Sale';
import Brand from './brand/Brand';
import Social from './social/Social';
export default function Home () {

    return (
        <div className="homeContainer">
            <Banniere/>
            <Products/>
            <Sale/>
            <Brand/>
            <Social/>
        </div>
    )
}