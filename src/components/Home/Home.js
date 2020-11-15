import React from 'react';
import './Home.css'
import Banniere from './banniere/Banniere'
import Products from './products/Products';
import Sale from './sale/Sale';
import Brand from './brand/Brand';
import Social from './social/Social';
import HeaderSlides from '../slides/header/HeaderSlide';

export default function Home () {

    return (
        <div className="homeContainer">
            <HeaderSlides/>
            <Banniere/>
            <Products/>
            <Sale/>
            <Brand/>
            <Social/>
        </div>
    )
}