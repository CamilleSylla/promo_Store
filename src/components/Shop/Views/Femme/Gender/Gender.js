import React from 'react';

import './Gender.css'

export default function GenderNav({ gender, setGender, filter, setViews, genderTarget , setBrand, Brand }) {
    console.log(filter);
    const Gender = (e) => {
        if (genderTarget.target === e.target.value) {
            console.log(genderTarget);
        }else {
            const stuff = filter.filter((i) => {
                return i.gender.toLowerCase().match(e.target.value.toLowerCase())
            })
            setViews(stuff)
            setGender({...genderTarget, target: e.target.value})
            console.log(genderTarget);
        }

    }
    const Reset = (e) => {
        setGender(e.target.value)
        setViews(filter)
    }
    return (
        <div className="genderNavContainer">
            <button onClick={Reset} value={[]}>Tout</button>
            {gender.map((details, i) => {
                return (
                    <button onClick={Gender} value={details}>{details}</button>
                )
            })}
        </div>
    )
}