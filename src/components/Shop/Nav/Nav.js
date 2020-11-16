import React, { useContext, useState } from 'react';
import { ItemContext } from '../../../context/ItemContext';

import "./Nav.css"

export default function ShopNav({ cat, filter, setViews, genderTarget}) {

    function showFilter() {
        if (genderTarget.target) {
            const newFilter = filter.filter((i) => {
                return i.gender.toLowerCase().match(genderTarget.target.toLowerCase())
            })
            const newCat = newFilter.map(a => a.category.toLowerCase());
            const categoryFilter = ([...new Set(newCat)]);
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
    return (
        <div className="shopNavContainer">
            <div className="shopNavFilter">
                {showFilter()}
            </div>

        </div>
    )
} 