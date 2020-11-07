import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import Banniere from './banniere/Banniere'
import Products from './products/Products';
import Sale from './sale/Sale';
import Brand from './brand/Brand';
import Social from './social/Social';
import HeaderSlides from '../slides/header/HeaderSlide';

import { ItemContext } from '../../context/ItemContext'

export default function Home () {
    const [items, setItems] =  useContext(ItemContext);
    const [user, setUser] = useState(0)
    const getItems = async () => {
        const data = await axios.get(`/api/publicItem`)
        .then(res => {
            return res.data;
        })
        setItems(data);
        setUser(1)
        console.log(items);
    }
    useEffect(() => {
        getItems()
    }, [user])

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