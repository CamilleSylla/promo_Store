import React from 'react';

import './Gender.css'

export default function GenderNav({ gender, filterObj, setFilterObj }) {
    const Gender = (e) => {
        if (filterObj.gender === e.target.value) {
            delete filterObj.gender
        }else {
            setFilterObj({...filterObj, gender: e.target.value})
            console.log(filterObj);
        }

    }
    const Reset = (e) => {
        setFilterObj({})
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