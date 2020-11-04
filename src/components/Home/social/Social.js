import React from 'react';

//style
import './Social.css'

//assets
import IG from '../../../assets/Icons/instagram.svg'

export default function Social() {

    return (
        <div className="socialContainer">
            <div className="socialTitle">
                <div className="socialLayer">
                    <div className="socialImgContainer">
                        <img src={IG} alt="instagram"/>
                    </div>
                    <p id="socialTag">Suivez nous sur instagram</p>
                    <p id="socialDesc">@monentreprise</p>
                </div>
            </div>
        </div>
    )
}