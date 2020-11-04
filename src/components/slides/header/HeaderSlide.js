import React from 'react';

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
                        <a href=""> explorer</a>
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