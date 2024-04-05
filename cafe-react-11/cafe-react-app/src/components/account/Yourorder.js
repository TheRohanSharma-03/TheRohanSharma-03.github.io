import React, { useState } from "react";
import "./Yourorder.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accountmenu from './Accountmenu';

function Yourorder() {
    return (
        <div className="yourorder">
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
                        <div className="rightTop">
                            <div className="topFirst">Your order</div>
                            <div className="topSecond">
                                <div className="secondLeft">
                                    <img className="yourOrderImg" src="/assets/yourOrder.png" alt="accountImg.png" />
                                </div>
                                <div className="secondRight">seems like you have yet to place an order</div>
                            </div>
                        </div>
                        <div className="rightBottom"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Yourorder;
