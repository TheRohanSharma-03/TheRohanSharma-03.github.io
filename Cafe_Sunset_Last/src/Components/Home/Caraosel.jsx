import "./Style.css";
import panna from "../../Assests/panna.jpeg";
import platter from "../../Assests/platter.jpeg";
import chiken from "../../Assests/chiken.jpeg";

// for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

function Caraosel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  return (
    <>
      <div className="slider-container navBarContantRight">
      <h5>We Are Known For :-</h5>
      <Slider className="caraosel-content-wrapper" {...settings}>
      <div className="caraosel-content1">
          <img src={panna} alt="sliderImg1" />
          <p class="foodContant1Header">Chai Infusion Dessert: Cardamom Chai Panna Cotta</p>
          <p className="foodContant2Header">Intusion Dessert - Caramam Delectable Creation Melds The Veety Smoothness Of Italion Panno Cotta With The omotic Allure Of</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>

        <div className="caraosel-content1">
          <img src={platter} alt="sliderImg1" />
          <p class="foodContant1Header">Sizzling Tandoori Platter: A Feast for the Senses</p>
          <p className="foodContant2Header">Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney.</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>

        <div className="caraosel-content1">
          <img src={chiken} alt="sliderImg1" />
          <p class="foodContant1Header">Mango Curry Chicken</p>
          <p className="foodContant2Header">Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>
      </Slider>
    </div>

      {/* <div className="navBarContantRight">
      <h5>We Are Known For :-</h5>
      <div className="caraosel-content-wrapper">
        <div className="caraosel-content1">
          <img src={panna} alt="sliderImg1" />
          <p class="foodContant1Header">Chai Infusion Dessert: Cardamom Chai Panna Cotta</p>
          <p className="foodContant2Header">Intusion Dessert - Caramam Delectable Creation Melds The Veety Smoothness Of Italion Panno Cotta With The omotic Allure Of</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>

        <div className="caraosel-content1">
          <img src={platter} alt="sliderImg1" />
          <p class="foodContant1Header">Sizzling Tandoori Platter: A Feast for the Senses</p>
          <p className="foodContant2Header">Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney.</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>

        <div className="caraosel-content1">
          <img src={chiken} alt="sliderImg1" />
          <p class="foodContant1Header">Mango Curry Chicken</p>
          <p className="foodContant2Header">Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.</p>
          <button className="foodContant-btn">FIND OUT MORE →</button>
        </div>

      </div>

      </div> */}
    </>
  );
}
export default Caraosel;
