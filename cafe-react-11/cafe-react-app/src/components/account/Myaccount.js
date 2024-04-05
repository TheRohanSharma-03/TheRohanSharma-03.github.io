import React, { useState } from "react";
import "./Myaccount.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accountmenu from './Accountmenu';

function Myaccount() {
    const [email, setEmail] = useState("");
    return (
        <div className="myaccount">
            <img className="accountImg" src="/assets/accountImg.png" alt="accountImg.png" />
            <div className="myaccountMain">
                <div className="mainTop">
                    <Accountmenu />
                </div>
                <div className="mainBottom">
                    <div className="bottomLeft">
                        <div className="leftBox">
                            <div className="title1">My Account</div>
                            <div className="title2">Account Information</div>
                            <div className="title3">Your Order</div>
                        </div>
                    </div>
                    <div className="bottomRight">
                        <div className="rightFirst">
                            <div className="firstTop">MY ACCOUNT</div>
                            <div className="firstBottom">ACCOUNT INFORMATION</div>
                        </div>
                        <div className="rightSecond">
                            <div className="secondFirst">CONTACT INFORMATION</div>
                            <div className="secondSecond">abhilash subhash</div>
                            <div className="secondThird">abhilashsubhash12345@gmail.com</div>
                            <div className="secondFourth">
                                <div className="fourthLeft">ADDRESS BOOK</div>
                                <div className="fourthRight">Manage Addresses</div>
                            </div>
                        </div>
                        <div className="rightThird">
                            <div className="thirdTop">
                                <div className="topAddress">DEFAULT BILLING ADDRESS</div>
                                <div className="topMessage">You have not set a default billing address.</div>
                                <div className="topEmail">Edit Address</div>
                            </div>
                            <div className="thirdBottom">
                                <div className="bottomAddress">DEFAULT SHIPPING ADDRESS</div>
                                <div className="bottomMessage">You have not set a default shipping address.</div>
                                <div className="bottomEmail">Edit Address</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainLast">
                    <form className='lastForm'>
                        <label for="email">Let us reach you</label>
                        <input className="email" type="text" placeholder='your E-Mail ID' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="submit" type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Myaccount;
