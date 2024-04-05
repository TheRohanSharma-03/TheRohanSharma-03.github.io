import "./MenuNav.css";

import { IoGiftOutline } from "react-icons/io5";
import React from "react";
import Slider from "react-slick";

import bestofrImg1 from "../../../Assests/bestofrImg1.jpeg";
import bestofrImg2 from "../../../Assests/bestofrImg2.jpeg";
import bestofrImg3 from "../../../Assests/bestofrImg3.jpeg";

// import { Link } from "react-router-dom";

function Bestofr() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <>
      <div className="bestofr-wrapper">
        <div className="bestofr-Header">
          <div className="tabmainmenu-hr"
            style={{
              backgroundColor: "#D16E43",
              width: "500px",
              height: "1px",
              display: "inline-flex",
              margin: "10px 20px",
            }}
          >
            {" "}
          </div>

          <h2>
            BEST OFFERS{" "}
            <span className="gift-wrapper">
              <IoGiftOutline />
            </span>
          </h2>

          <div className="tabmainmenu-hr"
            style={{
              backgroundColor: "#D16E43",
              width: "500px",
              height: "1px",
              display: "inline-flex",
              margin: "10px 20px",
            }}
          >
            {" "}
          </div>
        </div>

        <div className="bestofr-caraosel">
          <div className="slider-container bestofrwidth-tab">
            <Slider {...settings}>
              <div className="specialCombo-text">
                <img src={bestofrImg1} alt="" />
                <h3>SPECIAL PROMO</h3>
                <h2>BURGER COMBO</h2>

                <div className="specialCombo-Imgtext2">
                  <h4>
                    BUY GET <span className="span-text">1</span>{" "}
                  </h4>
                 <div className="orderNow-div">
                  <p>ORDER NOW</p>
                 </div>    
                </div>
              </div>

              <div className="bestofrImg2-contentBG">
                <h4>DELICIOUS COMBO</h4>
                <ul>
                <li>PEPSI</li>
                <li>BURGER</li>
                <li>FRENCH FRIES</li>
                </ul>
                
                <div className="bestofrImg2-Text">
                  <img src={bestofrImg2} alt="" />
                  <button className="menu-order-btn">ORDER NOW</button>
                  <h6 className="menu-dis-text">UP TO 50%</h6>
                </div>
                
              </div>

              <div className="bestofrImg3">
              <img src={bestofrImg3} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bestofr;
