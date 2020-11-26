import React, { useContext } from 'react';

//styles
import './Items.css'

import { Link } from 'react-router-dom';
import Eye from '../../../../assets/Icons/eye.svg'
import { OverviewContext } from '../../../../context/OverviewContext';

export default function Items({ toShow }) {
    const [target, setTarget] = useContext(OverviewContext)
    const userTarget = (e) => {
        console.log(e.target.value);
        const userTarget = toShow.filter((i) => {
            return i._id.match(e.target.value)
        })

        setTarget(userTarget)
        console.log(userTarget);
    }
    return (
        <div className="productItem">
            {toShow.map((details, i) => {
                while (i <= 2) {
                    return (
                        <div className="itemCard1">
                            <div className="itemImgWrap">
                                <img src={details.image} alt="first image" />
                            </div>
                            <div className="details">
                                <div className="detailsinfos">
                                <p className="detailsName">{details.name}</p>
                                <p className="brand">{details.brand} </p>
                                <p className="gender">{details.category}</p>
                                <p className="price">{details.price}€</p>
                                </div>
                                <div className="shopItemLink">
                                <Link to="/overview">
                                    <input type="image" src={Eye} alt="overview" onClick={userTarget} value={details._id} />
                                </Link>
                            </div>
                            </div>
                            
                        </div>
                    )
                }
            })}
        </div >
    )

} 