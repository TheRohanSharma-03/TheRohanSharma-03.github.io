import React from 'react'
import './Mainmenu.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Mainmenu() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1
  };
  return (
    <div className='mainmenu'>
        <div className='menuFirst'>
          <div className='firstTop'>
            <div className='topBorderLeft'><hr className='leftHr'></hr></div>
            <div className='topText'>S  U  N  S  E  T</div>
            <div className='topBorderRight'><hr className='rightHr'></hr></div>
          </div>
          <div className='firstBottom'>CAFE</div>
        </div>
        <div className='menuSecond'>
          <div className='secondFirst'>
            <div className='firstFirst'>
              <div className='menuBeverageDiv'>
                <img class="menuBeverage" src="./assets/beverage1.jfif" alt="menuBeverage.jpg" />
              </div>
              <div className='menuBeverageDiv'>
                <img class="menuBeverage" src="./assets/beverage2.jfif" alt="menuBeverage.jpg" />
              </div>
              <div className='menuBeverageDiv'>
                <img class="menuBeverage" src="./assets/beverage3.jfif" alt="menuBeverage.jpg" />
              </div>
            </div>
            <div className='firstSecond'>
              <div className='beverageNames'>HOT BEVERAGES</div>
              <div className='beverageNames'>COLD BEVERAGES</div>
              <div className='beverageNames'>SPECIALTY DRINKS</div>
            </div>
            <div className='firstThird'>
              <div className='beverageItem' id='beverageItem1'>
                <div className='itemList'>
                  <div className='listLeft'>
                    <div className='leftTitle'>Espresso</div>
                    <div className='leftSubtitle'>A single shot of concentrated coffee</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                    <div className='rightPrice'>Rs.120</div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                    <div className='leftTitle'>Cappuccino</div>
                    <div className='leftSubtitle'>Equal parts espresso steamed milk, and foam</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                    <div className='rightPrice'>Rs.250</div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                    <div className='leftTitle'>Americano</div>
                    <div className='leftSubtitle'>Espresso shots with hot water</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                    <div className='rightPrice'>Rs.158</div>
                  </div>
                </div>
              </div>
              <div className='beverageItem' id='beverageItem2'>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Iced Coffee</div>
                    <div className='leftPrice'>Rs.140</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Iced Latte</div>
                    <div className='leftPrice'>Rs.130</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Frappuccino</div>
                    <div className='leftPrice'>Rs.120</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Affogato</div>
                    <div className='leftPrice'>Rs.110</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Ice Latte</div>
                    <div className='leftPrice'>Rs.160</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
              </div>
              <div className='beverageItem'>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Matcha Latte</div>
                    <div className='leftPrice'>Rs.148</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Turmeric Latte</div>
                    <div className='leftPrice'>Rs.160</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Caramel  Tea</div>
                    <div className='leftPrice'>Rs.160</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Green Tea</div>
                    <div className='leftPrice'>Rs.120</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
                <div className='itemList'>
                  <div className='listLeft'>
                  <div className='leftTitle'>Herbal Infusions</div>
                    <div className='leftPrice'>Rs.120</div>
                  </div>
                  <div className='listRight'>
                    <div className='rightPlus'><img width={'30px'} class="plusIcon" src="./assets/plus.png" alt="plusIcon" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='secondSecond'>
            <div className='secondFirst'>
              <div className='firstLeft'><hr className='hrLeft'></hr></div>
              <div className='firstCategories'>OTHER CATEGORIES</div>
              <div className='firstRight'><hr className='hrRight'></hr></div>
            </div>
            <div className='secondSecond'></div>
            <div className='secondThird'>
              <Link className='explore' to="/explore">EXPLORE</Link>
            </div>
          </div>
          <div className='secondThird'>
            <div className='bestOffers'>
              <div className='firstLeft'><hr className='hrLeft'></hr></div>
              <div className='firstCategories'>BEST OFFERS</div>
              <div className='firstGift'><img width={'30px'} class="plusIcon" src="./assets/gift.png" alt="plusIcon" />  </div>
              <div className='firstRight'><hr className='hrRight'></hr></div>
            </div> 
            <div className="slider-container">
              <Slider {...settings} className="slider-main">
                <div className='slider-div' id='slider-div-1'>
                  <img class="slider-img" id="slider-img-1" src="./assets/menuCarousalOfferImg1.png" alt="plusIcon" />    
                  <div className='imgCaption'>
                    <div className='imgCaption1'>SPECIAL PROMO</div>
                    <div className='imgCaption2'>BURGER COMBO</div>
                    <div className='imgCaption3'>
                      <div className='caption3Left'>
                        <div className='leftCircle'>
                          <div className='leftLeft'>BUY GET</div>
                          <div className='leftRight'>1</div>
                        </div>
                      </div>
                      <div className='caption3Right'>
                        <div className='rightBox'>
                          <div className='rightRight'>ORDER NOW</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slider-div' id='slider-div-2'>
                  <div className='slider-div-inner' id='slider-div-inner-2'>
                    <div className='div-inner-top'>
                      <div className='top-top'>DELICIOUS COMBO </div>
                      <div className='top-bottom'>&#9679; PEPSI &#9679; BURGER &#9679; FRENCH FRIES</div>
                    </div>
                    <img class="slider-img" id="slider-img-2" src="./assets/menuCarousalOfferImg2.png" alt="plusIcon" />   
                  </div> 
                </div>
                <div className='slider-div' id='slider-div-3'>
                  <img class="slider-img" id="slider-img-3" src="./assets/menuCarousalOfferImg3.png" alt="plusIcon" />    
                </div>
              </Slider>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mainmenu