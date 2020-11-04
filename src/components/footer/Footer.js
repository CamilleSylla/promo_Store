import React from 'react';

//style
import './Footer.css';


//assets
import ID from '../../assets/Logos/IconicDevLatest.svg'
import Loc from '../../assets/Icons/footer/placeholder.svg'
import Mail from '../../assets/Icons/footer/email.svg'
import Phone from '../../assets/Icons/footer/telephone.svg'

export default function Footer() {

    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerGrid">
                    <div className="footerImgContainer">
                        <img src={ID} alt="logo" />
                    </div>
                    <div className="footerElementsContainer">

                        <div className="footerElements">
                            <div className="footerInfos">
                                <img src={Loc} alt="map" id="map" />
                                <p>1 rue de la République, 02100, Saint-Quentin</p>
                            </div>
                            <div className="footerInfos">
                                <img src={Mail} alt="mail" id="mail" />
                                <p>entreprise@mail.com</p>
                            </div>
                            <div className="footerInfos">
                                <img src={Phone} alt="phone" id="phone" />
                                <p>+33 6 66 66 66 66</p>
                            </div>
                        </div>
                    </div>
                    <div className="footerElementsContainer">
                        <div className="footerElements">
                            <p className="footerTitle"> Categories</p>

                            <div className="footerInfosText">
                                <ul>
                                    <li>Femme</li>
                                    <li>Homme</li>
                                    <li>Accessoires</li>
                                    <li>Chaussures</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="footerElementsContainer">
                        <div className="footerElements">
                            <p className="footerTitle"> Liens Rapides</p>

                            <div className="footerInfosText">
                                <ul>
                                    <li>Mon Compte</li>
                                    <li>Guide des tailles</li>
                                    <li>CGU & Mention Légales</li>
                                    <li>Contact</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copy"> Copyright © 2020 IconicDev.fr | website build by ICONICDEV </p>
        </div>
    )
}