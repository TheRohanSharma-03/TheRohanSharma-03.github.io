import "../Menu8/Menu8.css";

import bgIMG8 from "../../../Assests/bgIMG8.png";
import React from "react";
import Slider from "react-slick";

import { FaPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";

function MaincomboMenu7() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <main>
        <div className="menu8-wrapper">
          <div className="menu8-bgImg">
            <img src={bgIMG8} alt="" />
          </div>

          <div className="menu8-wrapper">
            <div className="menu8-container">
              <div className="menu8-itemName-caraosel">
                <div className="slider-container menu8List-text">
                  <Slider className="" {...settings}>
                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu1">BURGER & SANDWICHES</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu2">CHINESE CUSINE</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu3">STARTERS</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu4">SIDES</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu5">SALADS</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu7">MAIN COURSE</Link>
                      </h4>
                    </div>

                    <div className="menu8List-text">
                      <h4>
                        <Link to="/menu8">VALUE COMBO</Link>
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="combo-Text">
                    <h4>VALUE COMBO</h4>
                </div>


              <div className="combo-wrapper">
                <div className="combo-Left">
                  {/* <div className="combo-Text">
                    <h4>VALUE COMBO</h4>
                  </div> */}

                  <div className="comboLists-wrapper">
                    <div className="combo-Category">
                      <div className="combo-conteriner">
                        <div className="combo-header-Rs">
                          <h4>Combo 1: Sunset Sampler</h4>
                          {/* mob view */}
                          <h5>Combo 1: <br /> Sunset Sampler</h5>
                          <ul>
                            <li>Choice of Starter</li>
                            <ul>
                                <li>Crispy Vegetable Spring Rolls</li>
                                <li>Chicken Satay Skewers</li>
                            </ul>            
                          </ul>

                          <ul>
                            <li>Main Course:</li>
                            <ul>
                                <li>Vegetable Pad Thai</li>
                                <li>Chicken Tikka Masala</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Side Dish:</li>

                            <ul>
                                <li>Garlic Parmesan Fries</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Beverage:</li>

                            <ul>
                                <li>Soft Drink or Iced Tea</li>
                            </ul>
                          </ul>
                          <span>570/-</span>
                        </div>

                        <div className="combo-2Btn-vegAdd">

                          <div className="combo-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="combo-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="combo-conteriner">
                        <div className="combo-header-Rs">
                          <h4>Combo 2: Taste of Asia</h4>
                          {/* mob view */}
                          <h5>Combo 2: <br />Taste of  Asia</h5>
                          <ul>
                            <li>Choice of Starter:</li>
                            <ul>
                                <li>Prawn Tempura</li>
                                <li>Veg Spring Rolls</li>
                            </ul>            
                          </ul>

                          <ul>
                            <li>Main Course:</li>
                            <ul>
                                <li>Beef Rendang with Steamed Jasmine Rice</li>
                                <li>Thai Basil Chicken with Egg Fried Rice</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Dessert:</li>

                            <ul>
                                <li>Mango Sticky Rice</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Beverage:</li>

                            <ul>
                                <li>Thai Iced Tea or Lemongrass Infusion</li>
                            </ul>
                          </ul>
                          <span>799/-</span>
                        </div>

                        <div className="combo-2Btn-vegAdd">

                          <div className="combo-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="combo-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>                    
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    // height: "80vh",
                    // width:"1px",
                    border: "1px solid #F6FA11",
                    // marginTop: "5rem",
                    // marginBottom:"5rem"
                  }}
                />

                <div className="Valuecombo-right">
                  {/* <div className="pastaRisotto-Text">
                    <h4>PASTA AND RISOTTO</h4>
                  </div> */}

                  <div className="ValuecomboLists-wrapper">
                    <div className="Valuecombo-Category">
                      <div className="Valuecombo-conteriner">
                        <div className="Valuecombo-header-Rs">
                          <h4>Combo 3: Vegetarian Delight</h4>
                          {/* mob view */}
                          <h5>Combo 3: <br /> Vegetarian Delight</h5>
                          <ul>
                            <li>Starter:</li>
                            <ul>
                                <li>Caprese Salad</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Main Course:</li>
                            <ul>
                                <li>Paneer Tikka Masala with Garlic Naan</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Side Dish:</li>
                            <ul>
                                <li>Cumin-Spiced Roasted Potatoes</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Dessert:</li>
                            <ul>
                                <li>Lemon Meringue Tart</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Beverage:</li>
                            <ul>
                                <li>Fresh Lime Soda</li>
                            </ul>
                          </ul>

                          <span>799/-</span>
                        </div>

                        <div className="Valuecombo-2Btn-Add">
                          <div className="Valuecombo-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Valuecombo-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Valuecombo-conteriner">
                        <div className="Valuecombo-header-Rs">
                          <h4>Combo 4: Family Feast</h4>
                           {/* mob view */}
                           <h5>Combo 4: <br /> Family Feast</h5>
                          <ul>
                            <li>Starter:</li>
                            <ul>
                                <li>Caprese Salad</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Main Course:</li>
                            <ul>
                                <li>Paneer Tikka Masala with Garlic Naan</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Side Dish:</li>
                            <ul>
                                <li>Cumin-Spiced Roasted Potatoes</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Dessert:</li>
                            <ul>
                                <li>Lemon Meringue Tart</li>
                            </ul>
                          </ul>

                          <ul>
                            <li>Beverage:</li>
                            <ul>
                                <li>Fresh Lime Soda</li>
                            </ul>
                          </ul>

                          <span>699/-</span>
                        </div>

                        <div className="Valuecombo-2Btn-Add">
                          <div className="Valuecombo-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Valuecombo-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu8-quotes">
                <h4>Indulge in Value and Flavor with Our Irresistible Value Combos at Café Sunset!</h4>
          </div>
        </div>
      </main>
    </>
  );
}
export default MaincomboMenu7;
