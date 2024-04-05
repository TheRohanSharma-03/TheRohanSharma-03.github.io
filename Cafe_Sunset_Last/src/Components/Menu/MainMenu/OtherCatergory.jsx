import "./MenuNav.css";

import BurgerSandwich from '../../../Assests/BurgerSandwich.jpeg'
import salad from '../../../Assests/salad.jpeg'
import iceCream from '../../../Assests/iceCream.jpeg'
import Valuecombo from '../../../Assests/Valuecombo.png'

import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";

function OtherCatergory() {

  const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <>
      <div className="othrCtgry-Wrapper">
        <div className="othrCtgry-Header">
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

            <h2>OTHER CATEGORIES</h2>

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

        <div className="othrCategory-wrapper">
          <div className="slider-container widthforTab">
            <Slider {...settings}>
              <div className="caraosel-HeaderText">
                <img src={BurgerSandwich} alt="" />
                <h4>BURGER & SANDWICHES</h4>
              </div>

              <div className="caraosel-HeaderText">
                <img src={salad} alt="" />
                <h4>SALADS</h4>
              </div>

              <div className="caraosel-HeaderText">
                <img src={iceCream} alt="" />
                <h4>DESSERTS / ICE-CREAM</h4>
              </div>

              <div className="caraosel-HeaderText">
                <img src={Valuecombo} alt="" />
                <h4>VALUE COMBO</h4>
              </div>
            </Slider>
          </div>

          <div className="Explore-btn">
              <button><Link to="/whatsonMind">EXPLORE</Link></button>
          </div>

        </div>

        {/* <div className="othrCategory-wrapper">
          <div className="slider-container">
            <Slider {...settings}>
                <div className="caraosel-HeaderText">
                  <img src={BurgerSandwich} alt="" />
                  <h4>BURGER & SANDWICHES</h4>
                </div>

                <div className="caraosel-HeaderText">
                  <img src={salad} alt="" />
                  <h4>SALADS</h4>
                </div>

                <div className="caraosel-HeaderText">
                  <img src={iceCream} alt="" />
                  <h4>DESSERTS / ICE-CREAM</h4>
                </div>

                <div className="caraosel-HeaderText">
                  <img src={Valuecombo} alt="" />
                  <h4>VALUE COMBO</h4>
                </div>
            </Slider>
          </div>

          <div className="Explore-btn">
              <button><Link to="/whatsonMind">EXPLORE</Link></button>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default OtherCatergory;
