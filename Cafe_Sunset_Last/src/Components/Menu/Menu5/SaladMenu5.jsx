import "../Menu5/Menu5.css";

import bgIMG5 from "../../../Assests/bgIMG5.png";
import React from "react";
import Slider from "react-slick";


import { FaPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";

function SaladMenu5() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <main>
        <div className="menu5-wrapper">
          <div className="menu5-bgImg">
            <img src={bgIMG5} alt="" />
          </div>

          <div className="menu5-wrapper">
            <div className="menu5-container">
              <div className="menu5-itemName-caraosel">
                <div className="slider-container menu5List-text">
                  <Slider className="" {...settings}>
                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu1">BURGER & SANDWICHES</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu2">CHINESE CUSINE</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu3">STARTERS</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu4">SIDES</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu5">SALADS</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu7">MAIN COURSE</Link>
                      </h4>
                    </div>

                    <div className="menu5List-text">
                      <h4>
                        <Link to="/menu8">VALUE COMBO</Link>
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="salad-wrapper">
                <div className="salad-Left">
                  <div className="salad-Text">
                    <h4>SALAD</h4>
                    {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                  </div>

                  <div className="saladLists-wrapper">
                    <div className="salad-Category">
                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Classic Caesar Salad</h4>
                          {/* Mob view */}
                          <h5>Classic Caesar Salad</h5>
                          <span>159/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-vejBtn-grn">
                            <span class="salad-vejDot-grn"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Mediterranean Chickpea Salad</h4>
                          {/* Mob view */}
                          <h5>Mediterranean <br />Chickpea  Salad</h5>
                          <span>149/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-vejBtn-grn">
                            <span class="salad-vejDot-grn"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Asian Sesame Noodle Salad</h4>
                          {/* Mob view */}
                          <h5>Asian Sesame <br /> Noodle  Salad</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-vejBtn-grn">
                            <span class="salad-vejDot-grn"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Summer Berry Spinach Salad</h4>
                          {/* Mob view */}
                          <h5>Summer Berry <br /> Spinach Salad</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-vejBtn-grn">
                            <span class="salad-vejDot-grn"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Grilled Chicken Avocado Salad</h4>
                          {/* Mob view */}
                          <h5>Grilled Chicken <br /> Avocado Salad</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-nonvejBtn-red">
                            <span class="salad-nonvejDot-red"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Shrimp and Mango Salad <br /> (Mango Substitute Available)</h4>
                          {/* Mob view */}
                          <h5>Shrimp <br /> and Mango Salad <br /> (Mango Substitute  <br /> Available)</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-nonvejBtn-red">
                            <span class="salad-nonvejDot-red"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Tuna Nicoise Salad</h4>
                          {/* Mob view */}
                          <h5>Tuna Nicoise Salad</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-nonvejBtn-red">
                            <span class="salad-nonvejDot-red"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="salad-conteriner">
                        <div className="salad-header-Rs">
                          <h4>Thai Beef Salad</h4>
                          {/* Mob view */}
                          <h5>Thai Beef Salad</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                          <div className="salad-nonvejBtn-red">
                            <span class="salad-nonvejDot-red"></span>
                          </div>

                          <div className="salad-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="salad-AddBtn">
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

                <div className="enhans-right">
                  <div className="enhans-Text">
                    <h4>ENHANCEMENTS</h4>
                  </div>

                  <div className="enhansLists-wrapper">
                    <div className="enhans-Category">
                      <div className="enhans-conteriner">
                        <div className="enhans-header-Rs">
                          <h4>TProtein Add-Ons</h4>
                          {/* Mob view */}
                          <h5>TProtein Add-Ons</h5>
                          <ul><li>Description: Customize your <br /> salad with additional grilled <br /> chicken, shrimp, salmon, or tofu <br /> for an extra protein boost.</li></ul>
                          
                          <span>149/-</span>
                        </div>

                        <div className="enhans-twoBtn-Add">
                          <div className="enhans-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="enhans-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="enhans-conteriner">
                        <div className="enhans-header-Rs">
                          <h4>Gluten-Free Options Available</h4>
                          {/* Mob view */}
                          <h5>Gluten-Free <br /> Options Available</h5>
                          <ul><li>Description: Ask your server for <br /> gluten-free alternatives for <br /> select salads.</li></ul>
                          
                          <span>139/-</span>
                        </div>

                        <div className="enhans-twoBtn-Add">
                          <div className="enhans-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="enhans-AddBtn">
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
        </div>
      </main>
    </>
  );
}
export default SaladMenu5;
