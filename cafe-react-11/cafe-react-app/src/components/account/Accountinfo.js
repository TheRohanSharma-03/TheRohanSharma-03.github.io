import React, { useState } from "react";
import "./Accountinfo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accountmenu from './Accountmenu';

function Accountinfo() {
    return (
        <div className="accountinfo">
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
                            <div className="firstTop">EDIT ACCOUNT INFORMATION</div>
                            <div className="firstBottom">ACCOUNT INFORMATION</div>
                        </div>
                        <div className="rightSecond">
                            <div className="secondFirst">First Name *</div>
                            <div className="secondSecond">ABC</div>
                            <div className="secondThird">Last Name *</div>
                            <div className="secondFourth">XYZ</div>
                            <div className="secondFifth">Phone Number *</div>
                            <div className="secondSixth">123456789</div>
                            <div className="secondSeventh">ADDRESS</div>
                        </div>
                        <div className="rightThird">
                            <div className="thirdFirst">Street Address *</div>
                            <div className="thirdSecond"></div>
                            <div className="thirdThird">City *</div>
                            <div className="thirdFourth"></div>
                            <div className="thirdFifth">State *</div>
                            <div className="thirdSixth"></div>
                            <div className="thirdSeventh">Zip Code *</div>
                            <div className="thirdEight"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accountinfo;
