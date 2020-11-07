import React from 'react';
import { Link } from 'react-router-dom'
//styles
import './HeaderSlides.css'

export default function HeaderSlides () {

    return (
        <div className="headerSlide">
            <div className="headerLayer">
                <div className="headerGrid">
                    <div className="headerTitle">
                        <h4>Appreciez l'automne</h4>
                        <h5>#nouvellecollection</h5>
                        <p>Nous ameliorons votre style</p>
                        <Link to='/shop'>explorer</Link>
                    </div>
                </div>
            <div className="headerSocial">
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            </div>
        </div>
    )
}