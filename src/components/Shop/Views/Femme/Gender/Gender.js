import React from 'react';

import './Gender.css'

export default function GenderNav({ gender, setGender, filter, setViews, genderTarget }) {
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
    return (
        <div className="genderNavContainer">
            {gender.map((details, i) => {
                return (
                    <button onClick={Gender} value={details}>{details}</button>
                )
            })}
        </div>
    )
}