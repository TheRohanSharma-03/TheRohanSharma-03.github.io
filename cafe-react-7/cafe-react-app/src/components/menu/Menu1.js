import React from 'react'
import './Menu1.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Menu1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='menu1'>
      <div className='menu1Main'>
        <div className='mainTop'>
          <img className="menu1TopImg" src="./assets/menu1TopImg.jfif" alt="menu1TopImg" />
        </div>
        <div className='mainBottom'>
          <div className='bottomTop'>
            <div className="slider-container">
              <Slider className="slider-inner" {...settings}>
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
                <div className="inner6">
                  <Link className='menu6Link' to="/menu6">DESSERTS / ICE-CREAM</Link>
                </div>
              </Slider>
            </div>
          </div>
          <div className='bottomMid'>
            <div className='midLeft'>
              <div className='leftTop'>
                <div className='topTitle'>
                  <div className='titleName'>BURGERS</div>
                  <div className='titleVegNonveg'>
                    <div className='vegButton'>
                      <button className='buttonOuter'>
                        <div className='buttonInner'></div>
                      </button>
                    </div>
                    <div className='partition'>
                      <div className='partitionInner'></div>
                    </div>
                    <div className='nonvegButton'>
                      <button className='buttonOuter'>
                        <div className='buttonInner'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='leftBottom'>
                <div className='bottomMain'>
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Tandoori Chicken Tikka Burger</div>
                      <div className='itemPrice'>210/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='nonvegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Paneer Bhurji Burger</div>
                      <div className='itemPrice'>169/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='vegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Aloo Tikki Burger</div>
                      <div className='itemPrice'>149/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='vegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Egg Bhurji Breakfast Burger</div>
                      <div className='itemPrice'>129/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='nonvegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Keema Pav Burger</div>
                      <div className='itemPrice'>229/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='nonvegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'>Palak Paneer Burger</div>
                      <div className='itemPrice'>159/-</div>
                    </div>
                    <div className='itemVegNonvegType'>
                      <div className='vegButton'>
                        <button className='buttonOuter'>
                          <div className='buttonInner'></div>
                        </button>
                      </div>
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
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'></div>
                      <div className='itemPrice'></div>
                    </div>
                    <div className='itemVegNonvegType'></div>
                    <div className='itemQuantity'></div>
                    <div className='itemAdd'></div>
                  </div>
                  <div className='mainBoxes'>
                    <div className='itemNameAndPrice'>
                      <div className='itemName'></div>
                      <div className='itemPrice'></div>
                    </div>
                    <div className='itemVegNonvegType'></div>
                    <div className='itemQuantity'></div>
                    <div className='itemAdd'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='midRight'>
              <div className='rightTop'>
                <div className='topTitle'>
                  <div className='titleName'>SANDWICHES</div>
                  <div className='titleVegNonveg'>
                    <div className='vegButton'>
                      <button className='buttonOuter'>
                        <div className='buttonInner'></div>
                      </button>
                    </div>
                    <div className='partition'>
                      <div className='partitionInner'></div>
                    </div>
                    <div className='nonvegButton'>
                      <button className='buttonOuter'>
                        <div className='buttonInner'></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rightBottom'></div>
            </div>
          </div>
          <div className='bottomBottom'>
            <img class="show-more-arrow" src="./assets/show-more-arrow.png" alt="show-more-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu1