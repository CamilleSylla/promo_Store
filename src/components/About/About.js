import React, { useState } from 'react';

import './About.css'

//assets
import Shop from '../../assets/img/About/OnlineShop.svg'
import Cart from '../../assets/img/About/Cart.svg'
import Deliver from '../../assets/img/About/Deliver.svg'
import Way from '../../assets/img/About/Way.svg'
import Glasses from '../../assets/img/About/Glasses.jpg'
import Pose from '../../assets/img/About/Pose.jpg'
import Mail from '../../assets/Icons/About/email.svg'
import Axios from 'axios';
export default function About() {

    const [msg, setMsg] = useState({
        name: "",
        email: "",
        sujet: "",
        content: "",
    })

    const nameChange = (e) => {
        setMsg({ ...msg, name: e.target.value })
    }
    const emailChange = (e) => {
        setMsg({ ...msg, email: e.target.value })
    }
    const sujetChange = (e) => {
        setMsg({ ...msg, sujet: e.target.value })
    }
    const textChange = (e) => {
        setMsg({ ...msg, content: e.target.value })
    }

    function Send() {
        Axios.post(`https://iconic-store-serv.herokuapp.com/api/mail`, msg)
            .then(res => {
                console.log(res);
            })
    }
    return (
        <div className="aboutContainer">
            <div className="aboutTitle">
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <p>
                    usce dolor risus, consequat pharetra efficitur at
                </p>
                <p>
                    Nulla aliquet, justo in pharetra elementum,
                    dolor massa consequat lectus, et consectetur
                    quam nisl vel mauris. Duis aliquet aliquam
                    pulvinar. In blandit nibh sollicitudin diam
                    tristique suscipit. Donec quis lacus ligula.
                    Fusce eu tincidunt erat.
                </p>
            </div>
            <div className="aboutImageGridContainer">
                <div className="aboutImageGrid">
                    <div className="aboutImgContainer">
                        <img src={Shop} alt="Shop" />
                    </div>
                    <div className="aboutImgContainer">
                        <img src={Cart} alt="Cart" />
                    </div>
                    <div className="aboutImgContainer">
                        <img src={Way} alt="Way" />
                    </div>
                    <div className="aboutImgContainer">
                        <img src={Deliver} alt="Deliver" />
                    </div>
                </div>
            </div>
            <div className="aboutMiddleware">
                <p>
                    Nulla aliquet, justo in pharetra elementum,
                    dolor massa consequat lectus, et consectetur
                    quam nisl vel mauris. Duis aliquet aliquam
                    pulvinar. In blandit nibh sollicitudin diam
                    tristique suscipit. Donec quis lacus ligula.
                    Fusce eu tincidunt erat.
                </p>
            </div>

            <div className="aboutText">
                <div className="aboutTextGrid">
                    <div className="aboutTextImg">
                        <img className="img1" src={Glasses} alt="Glasses" />
                    </div>
                    <div className="aboutDescContainer">
                        <div className="aboutDesc">
                            <h4>Lorem ipsum</h4>
                            <p>Aenean tincidunt eu leo vitae fermentum.
                            Aenean quis varius risus. Pellentesque
                            nec libero vulputate, fringilla velit at,
                               tempor dui.</p>
                        </div>

                    </div>
                    <div className="aboutDescContainer">
                        <div className="aboutDesc">
                            <h4>Lorem ipsum</h4>
                            <p>Aenean tincidunt eu leo vitae fermentum.
                            Aenean quis varius risus. Pellentesque
                            nec libero vulputate, fringilla velit at,
                               tempor dui.</p>
                        </div>

                    </div>
                    <div className="aboutTextImg">
                        <img className="img2" src={Pose} alt="Pose" />
                    </div>
                </div>
            </div>
            <div className="aboutContactIcon">
                <img src={Mail} alt="Mail" />
            </div>
            <div className="aboutContactContainer">

                <div className="aboutContactGrid">
                    <h6>Nous contacter :</h6>
                    <div className="aboutLabels1">
                        <input type="text" placeholder="Nom Prénom" onChange={nameChange} />
                        <input type="email" placeholder="E-mail" onChange={emailChange} />
                        <input type="text" placeholder="Sujet" onChange={sujetChange} />
                    </div>
                    <div className="aboutLabels2">
                        <textarea placeholder="Votre message" onChange={textChange}></textarea>
                    </div>
                    <input className="contactSendButton" type="button" value="envoyer" onClick={Send} />

                </div>
            </div>
        </div>
    )
}