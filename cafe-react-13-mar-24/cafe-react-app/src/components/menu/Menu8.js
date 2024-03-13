import React from 'react'
import './Menu8.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Menu8() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='menu8'>
      <div className='menu8Main'>
        <div className='mainTop'>
          <img className="menu8TopImg" src="./assets/menu8TopImg.png" alt="menu8TopImg" />
        </div>
        <div className='mainBottom'>
          <div className='bottomTop'>
            <div className="slider-container">
              <Slider className="slider-inner" {...settings}>
                <div className="inner6">
                  <Link className='menu6Link' to="/menu6">DESSERTS / ICE-CREAM</Link>
                </div>
                <div className="inner7">
                  <Link className='menu7Link' to="/menu7">MAIN COURSE</Link>
                </div>
                <div className="inner8">
                  <Link className='menu8Link' to="/menu8">VALUE COMBO</Link>
                </div>
                <div className="inner1">
                  <Link className='menu1Link' to="/menu1">BURGER & SANDWICHES</Link>
                </div>
                <div className="inner2">
                  <Link className='menu2Link' to="/menu2">CHINESE CUSINE</Link>
                </div>
                <div className="inner3">
                  <Link className='menu3Link' to="/menu3">STARTERS</Link>
                </div>
                <div className="inner4">
                  <Link className='menu4Link' to="/menu4">SIDES</Link>
                </div>
                <div className="inner5">
                  <Link className='menu5Link' to="/menu5">SALADS</Link>
                </div>
              </Slider>
            </div>
          </div>
          <div className='bottomMid'>
            <div className='midLeft'>
              <div className='leftMain'>
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>Combo 1: Sunset Sampler</div>
                    <div className='itemDescription'>
                      <p className='parra'>● Choice of Starter: </p>
                      <ul >
                        <li>Crispy Vegetable Spring Rolls </li>
                        <li>Chicken Satay Skewers </li>
                      </ul>
                      <p className='parra'>● Main Course: </p>
                      <ul >
                        <li>Vegetable Pad Thai</li>
                        <li>Chicken Tikka Masala </li>
                      </ul>
                      <p>● Side Dish: </p>
                      <ul className='points'>
                        <li>Garlic Parmesan Fries </li>
                      </ul>
                      <p>● Beverage: </p>
                      <ul className='points'>
                        <li>Soft Drink or Iced Tea</li>
                      </ul>
                    </div>
                    <div className='itemPrice'>570/-</div>
                  </div>
                  <div className='itemQuantity'>
                    <div className='quantityButton'>
                      <div className='buttonMinus'>-</div>
                      <div className='buttonNumber'>0</div>
                      <div className='buttonPlus'>+</div>
                    </div>
                  </div>
                  <div className='itemAdd'>
                    <div className='addButton'>ADD +</div>
                  </div>
                </div>
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>Combo 2: Taste of Asia</div>
                    <div className='itemDescription'>
                      <p className='parra'>● Choice of Starter: </p>
                      <ul >
                        <li>Prawn Tempura </li>
                        <li>Veg Spring Rolls </li>
                      </ul>
                      <p className='parra'>● Main Course: </p>
                      <ul >
                        <li>Beef Rendang with Steamed Jasmine Rice</li>
                        <li>Thai Basil Chicken with Egg Fried Rice </li>
                      </ul>
                      <p>● Dessert: </p>
                      <ul className='points'>
                        <li>Mango Sticky Rice </li>
                      </ul>
                      <p>● Beverage: </p>
                      <ul className='points'>
                        <li>Thai Iced Tea or Lemongrass Infusion</li>
                      </ul>
                    </div>
                    <div className='itemPrice'>570/-</div>
                  </div>
                  <div className='itemQuantity'>
                    <div className='quantityButton'>
                      <div className='buttonMinus'>-</div>
                      <div className='buttonNumber'>0</div>
                      <div className='buttonPlus'>+</div>
                    </div>
                  </div>
                  <div className='itemAdd'>
                    <div className='addButton'>ADD +</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='midRight'>
              <div className='rightMain'>
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>Combo 3: Vegetarian Delight</div>
                    <div className='itemDescription'>
                      <p className='parra'>● Starter: </p>
                      <ul >
                        <li>Caprese Salad</li>
                      </ul>
                      <p className='parra'>● Main Course: </p>
                      <ul >
                        <li>Paneer Tikka Masala with Garlic Naan</li>
                      </ul>
                      <p>● Side Dish: </p>
                      <ul className='points'>
                        <li>Cumin-Spiced Roasted Potatoes </li>
                      </ul>
                      <p>● Dessert: </p>
                      <ul className='points'>
                        <li>Lemon Meringue Tart</li>
                      </ul>
                      <p>● Beverage: </p>
                      <ul className='points'>
                        <li>Fresh Lime Soda</li>
                      </ul>
                    </div>
                    <div className='itemPrice'>570/-</div>
                  </div>
                  <div className='itemQuantity'>
                    <div className='quantityButton'>
                      <div className='buttonMinus'>-</div>
                      <div className='buttonNumber'>0</div>
                      <div className='buttonPlus'>+</div>
                    </div>
                  </div>
                  <div className='itemAdd'>
                    <div className='addButton'>ADD +</div>
                  </div>
                </div>
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>Combo 4: Family Feast</div>
                    <div className='itemDescription'>
                      <p className='parra'>● Starter: </p>
                      <ul >
                        <li>Caprese Salad </li>
                      </ul>
                      <p className='parra'>● Main Course: </p>
                      <ul >
                        <li>Paneer Tikka Masala with Garlic Naan</li>
                      </ul>
                      <p>● Side Dish: </p>
                      <ul className='points'>
                        <li>Cumin-Spiced Roasted Potatoes </li>
                      </ul>
                      <p>● Dessert: </p>
                      <ul className='points'>
                        <li>Lemon Meringue Tart</li>
                      </ul>
                      <p>● Beverage: </p>
                      <ul className='points'>
                        <li>Fresh Lime Soda</li>
                      </ul>
                    </div>
                    <div className='itemPrice'>570/-</div>
                  </div>
                  <div className='itemQuantity'>
                    <div className='quantityButton'>
                      <div className='buttonMinus'>-</div>
                      <div className='buttonNumber'>0</div>
                      <div className='buttonPlus'>+</div>
                    </div>
                  </div>
                  <div className='itemAdd'>
                    <div className='addButton'>ADD +</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottomBottom'>
            Indulge in Value and Flavor with Our Irresistible Value Combos at Café Sunset!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu8