import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../context/ItemContext';

import "./Nav.css"

export default function ShopNav({ filterObj, filtered, setFilterObj }) {

    const Category = (e) => {
        e.preventDefault();
        if (filterObj.category === e.target.value) {
            delete filterObj.category
        }else {
            setFilterObj({...filterObj, category: e.target.value})
            console.log(filterObj);
        }

    }
    const Brand = (e) => {
        e.preventDefault();
        if (filterObj.brand === e.target.value) {
            delete filterObj.brand
        }else {
            setFilterObj({...filterObj, brand: e.target.value})
            console.log(filterObj);
        }

    }
    function showCategory() {
            const newCat = filtered.map(a => a.category.toLowerCase());
            const categoryFilter = ([...new Set(newCat)]);
            categoryFilter.sort();
            return (
                <div>
                    {categoryFilter.map((details, i) => {
                        return (
                            <button onClick={Category} value={details}>
                                {details}
                            </button>
                        )
                    })}
                </div>
            )
    }
    function showBrand() {
            const newBrand = filtered.map(a => a.brand.toLowerCase());
            const brandFilter = ([...new Set(newBrand)]);
            brandFilter.sort();
            return (
                <div>
                    {brandFilter.map((details, i) => {
                        return (
                            <button onClick={Brand} value={details}>
                                {details}
                            </button>
                        )
                    })}
                </div>
            )
    }
   
    return (
        <div className="shopNavContainer">

            <div className="shopNavFilter">
                <h2>Categories</h2>
                {showCategory()}
                <h2>Marques</h2>
                {showBrand()}
            </div>

        </div>
    )
} 