import React, { useState } from "react";
import "./Faq.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Faq() {
    return (
        <div className="faq">
            <div className="faqMain">
                <div className="mainFirst">
                    <div className="firstTop">FAQs</div>
                    <div className="firstBottom">
                        <div className="bottomRow1">
                            <div className="item1">All</div>
                            <div className="item2">Family</div>
                            <div className="item3">Comady Podcast</div>
                            <div className="item4">Offers</div>
                        </div>
                        <div className="bottomRow2">
                            <div className="item1">Community</div>
                            <div className="item2">Events</div>
                            <div className="item3">Food & Drinks</div>
                        </div>
                        <div className="bottomRow3">
                            <div className="item1">Beer</div>
                        </div>
                    </div>
                </div>
                <div className="mainSecond">
                    <div className="secondTop">Hi there! Just wondering, do you happen to serve beer at your cafe? Thanks!</div>
                    <div className="secondBottom">"Thank you for reaching out! At the moment, we're proud to be a family-friendly cafe, so we don't serve alcohol. However, we have a delightful selection of beverages and treats to enjoy. Let us know if there's anything else we can assist you with!"</div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
