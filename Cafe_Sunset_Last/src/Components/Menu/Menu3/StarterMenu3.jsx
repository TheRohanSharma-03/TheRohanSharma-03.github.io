import "../Menu3/Menu3.css";

import bgIMG3 from "../../../Assests/bgIMG3.png";

import React from "react";
import Slider from "react-slick";

// import { RxSlash } from "react-icons/rx";

import { FaPlus } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";

import { Link } from "react-router-dom";

function StartMenu3() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <main>
        <div className="menu3-wrapper">
          <div className="menu3-bgImg">
            <img src={bgIMG3} alt="" />
          </div>

          <div className="menu3-wrapper">
            <div className="menu3-container">
              <div className="menu3-itemName-caraosel">
                <div className="slider-container menu3List-text">
                  <Slider className="" {...settings}>
                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu1">BURGER & SANDWICHES</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu2">CHINESE CUSINE</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu3">STARTERS</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu4">SIDES</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu5">SALADS</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu7">MAIN COURSE</Link>
                      </h4>
                    </div>

                    <div className="menuList-text">
                      <h4>
                        <Link to="/menu8">VALUE COMBO</Link>
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="Starter-wrapper">
                <div className="Starter-Left">
                  <div className="Starter-Text">
                    <h4>STARTERS</h4>
                    {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                  </div>

                  <div className="StarterLists-wrapper">
                    <div className="Starter-Category">
                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Crispy Vegetable Spring Rolls</h4>
                          {/* for mob view */}
                          <h5>Crispy Vegetable <br />Spring  Rolls</h5>
                          <span>159/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-vejBtn-grn">
                            <span class="Starter-vejDot-grn"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Paneer Tikka Skewers</h4>
                          {/* for mob view */}
                          <h5>Paneer Tikka Skewers</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-vejBtn-grn">
                            <span class="Starter-vejDot-grn"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>
                            Stuffed Mushrooms with <br />
                            Spinach and Feta
                          </h4>
                          {/* for mob view */}
                          <h5>Stuffed Mushrooms <br /> with  Spinach  and Feta</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-vejBtn-grn">
                            <span class="Starter-vejDot-grn"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Corn and Cheese Balls</h4>
                          {/* for mob view */}
                          <h5>Corn and Cheese Balls</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-vejBtn-grn">
                            <span class="Starter-vejDot-grn"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>
                            Chicken Satay with Peanut <br /> Sauce
                          </h4>
                           {/* for mob view */}
                           <h5>Chicken Satay with  <br />Peanut
                            Sauce</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-nonvejBtn-red">
                            <span class="Starter-nonvejDot-red"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Prawn Tempura</h4>
                          {/* for mob view */}
                          <h5>Prawn Tempura</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-nonvejBtn-red">
                            <span class="Starter-nonvejDot-red"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Spicy Chicken Wings</h4>
                          {/* for mob view */}
                          <h5>Spicy Chicken Wings</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-nonvejBtn-red">
                            <span class="Starter-nonvejDot-red"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Starter-conteriner">
                        <div className="Starter-header-Rs">
                          <h4>Fish Tikka Tacos</h4>
                           {/* for mob view */}
                           <h5>Fish Tikka Tacos</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Starter-threeBtn-vegAdd">
                          <div className="Starter-nonvejBtn-red">
                            <span class="Starter-nonvejDot-red"></span>
                          </div>

                          <div className="Starter-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Starter-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    // height: "90vh",
                    border: "1px solid #F6FA11",
                    marginTop: "7rem",
                    marginBottom: "5rem"
                  }}
                />

                <div className="Mouthwatering-right">
                  <div className="Mouthwatering-Text">
                    <h4>MOUTHWATERING COMBOS</h4>
                  </div>

                  <div className="MouthwateringLists-wrapper">
                    <div className="Mouthwatering-Category">
                      <div className="Mouthwatering-conteriner">
                        <div className="Mouthwatering-header-Rs">
                          <h4>Vegetarian Platter</h4>
                          {/* for mob view */}
                          <h5>Vegetarian <br />Platter</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Mouthwatering-twoBtn-Add">
                          <div className="Mouthwatering-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Mouthwatering-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Mouthwatering-conteriner">
                        <div className="Mouthwatering-header-Rs">
                          <h4>Sunset Signature Sampler</h4>
                          {/* for mob view */}
                          <h5>Sunset <br /> Signature <br /> Sampler</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Mouthwatering-twoBtn-Add">
                          <div className="Mouthwatering-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Mouthwatering-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BsArrowDownCircle className="scroll-down-icon" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default StartMenu3;
