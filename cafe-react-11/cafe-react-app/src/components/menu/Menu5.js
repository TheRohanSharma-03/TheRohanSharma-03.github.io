import React from 'react'
import './Menu5.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Menu5() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='menu5'>
      <div className='menu5Main'>
        <div className='mainTop'>
          <img className="menu5TopImg" src="./assets/menu5TopImg.jfif" alt="menu5TopImg" />
        </div>
        <div className='mainBottom'>
          <div className='bottomTop'>
            <div className="slider-container">
              <Slider className="slider-inner" {...settings}>
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
              </Slider>
            </div>
          </div>
          <div className='bottomMid'>
            <div className='midLeft'>
              <div className='leftMain'>
                <div className='mainBoxes'>
                  <div className='itemNameAndPrice'>
                    <div className='itemName'>CLASSIC CAESAR SALAD</div>
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
                    <div className='itemName'>MEDETERRANEAN CHICKPEA SALAD</div>
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
                    <div className='itemName'>ASIAN SESAME NOODLE SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                    <div className='itemName'>SUMMER BERRY SPINACH SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                    <div className='itemName'>GRILLED CHICKED AVOCADO SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                    <div className='itemName'>SHRIMP AND MANGO SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                    <div className='itemName'>TUNA NICOISE SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                    <div className='itemName'>THAI BEEF SALAD</div>
                    <div className='itemPrice'>139/-</div>
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
                <div className='mainHeader'>ENHANCEMENTS</div>
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>PROTEIN ADD-ONS</div>
                    <div className='itemDescription'>● Description: Customize your salad with additional grilled chicken, shrimp, salmon, or tofu for an extra protein boost.</div>
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
                <div className='mainBoxesWithDescription'>
                  <div className='itemNameAndDescriptionAndPrice'>
                    <div className='itemName'>GLUTEN-FREE OPTION AVAILABLE</div>
                    <div className='itemDescription'>● Description: Ask your server for gluten-free alternatives for select salads.</div>
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

export default Menu5