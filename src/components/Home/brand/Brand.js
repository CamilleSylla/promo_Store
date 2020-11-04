import React from 'react';

//style
import './Brand.css';

//assets
import Adidas from '../../../assets/Icons/marques/adidas.svg';
import Vans from '../../../assets/Icons/marques/vans.svg';
import Nike from '../../../assets/Icons/marques/nike.svg';
import Nf from '../../../assets/Icons/marques/nf.svg';
import Fubu from '../../../assets/Icons/marques/fubu.svg';

export default function Brand () {

    return (
        <div className="brandContainer">
            <div className="brandGrid">
                <img src={Adidas} alt="logo Adidas"/>
                <img src={Fubu} alt="logo Adidas"/>
                <img src={Nf} alt="logo Adidas"/>
                <img src={Nike} alt="logo Adidas"/>
                <img src={Vans} alt="logo vans"/>
            </div>
        </div>
    )
}