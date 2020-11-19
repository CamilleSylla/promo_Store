import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../context/ItemContext';

import "./Nav.css"

export default function ShopNav({ cat, filter, setViews, genderTarget, brand }) {

    const Category = (e) => {
        e.preventDefault();
        if (genderTarget.target) {
            const stuff = filter.filter((i) => {
                return i.category.toLowerCase().match(e.target.value.toLowerCase())
                    && i.gender.toLowerCase().match(genderTarget.target.toLowerCase())
            })
            setViews(stuff)
        } else {
            const stuff = filter.filter((i) => {
                return i.category.toLowerCase().match(e.target.value.toLowerCase())
            })
            setViews(stuff)
        }

    }

    const Brand = (e) => {
        e.preventDefault();
        if (genderTarget.target) {
            const stuff = filter.filter((i) => {
                return i.brand.toLowerCase().match(e.target.value.toLowerCase())
                    && i.gender.toLowerCase().match(genderTarget.target.toLowerCase())
            })
            setViews(stuff)
        } else {
            const stuff = filter.filter((i) => {
                return i.brand.toLowerCase().match(e.target.value.toLowerCase())
            })
            setViews(stuff)
        }
    }

    function showCategory() {
        if (genderTarget.target) {
            const newFilter = filter.filter((i) => {
                return i.gender.toLowerCase().match(genderTarget.target.toLowerCase())
            })
            const newCat = newFilter.map(a => a.category.toLowerCase());
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
        else {
            cat.sort();
            return (
                <div>
                    {cat.map((details, i) => {
                        return (
                            <button onClick={Category} value={details}>
                                {details}
                            </button>
                        )
                    })}
                </div>
            )

        }
    }
    function showBrand() {
        if (genderTarget.target) {
            const newFilter = filter.filter((i) => {
                return i.gender.toLowerCase().match(genderTarget.target.toLowerCase())
            })
            const newCat = newFilter.map(a => a.brand.toLowerCase());
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
        else{
            brand.sort();
            return (
                <div>
                    {brand.map((details, i) => {
                        return (
                            <button onClick={Brand} value={details}>
                                {details}
                            </button>
                        )
                    })}
                </div>
            )
        }
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