import React from 'react'
import './Menu7.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Menu7() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='menu7'>
      <div className='menu7Main'>
        <div className='mainTop'>
          <img className="menu7TopImg" src="./assets/menu7TopImg.jfif" alt="menu7TopImg" />
        </div>
        <div className='mainBottom'>
          <div className='bottomTop'>
            <div className="slider-container">
              <Slider className="slider-inner" {...settings}>
                <div className="inner5">
                  <Link className='menu5Link' to="/menu5">SALADS</Link>
                </div>
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
              </Slider>
            </div>
          </div>
          <div className='bottomMid'>
            <div className='midLeft'>
              <div className='leftMain'>
                <div className='mainBoxes'>
                  <div className='itemNameAndPrice'>
                    <div className='itemName'>VEGETABLE PAD THAI</div>
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
                    <div className='itemName'>PANEER MAKHANI</div>
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
                    <div className='itemName'>VEGETABLE BIRYANI</div>
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
                    <div className='itemName'>EGGPLANT PARMESAN</div>
                    <div className='itemPrice'>149/-</div>
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
                    <div className='itemName'>CHICKEN TIKKA MASALA</div>
                    <div className='itemPrice'>149/-</div>
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
                    <div className='itemName'>GRILLED SALMON WITH LEMON HERB BUTTER</div>
                    <div className='itemPrice'>149/-</div>
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
                    <div className='itemName'>FISH TIKKA TACOS</div>
                    <div className='itemPrice'>149/-</div>
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
              </div>
            </div>
            <div className='midRight'>
              <div className='rightMain'>
                <div className='mainHeader'>PASTA AND RISOTTO</div>
                <div className='mainBoxes'>
                  <div className='itemNameAndPrice'>
                    <div className='itemName'>PENNE ARRABBIATA</div>
                    <div className='itemPrice'>149/-</div>
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
                    <div className='itemName'>MUSHROOM RISOTTO</div>
                    <div className='itemPrice'>139/-</div>
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
            <img class="show-more-arrow" src="./assets/show-more-arrow.png" alt="show-more-arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu7