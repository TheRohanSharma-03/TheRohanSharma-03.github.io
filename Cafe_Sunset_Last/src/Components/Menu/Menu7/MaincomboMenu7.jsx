import "../Menu7/Menu7.css";

import bgIMG7 from "../../../Assests/bgIMG7.png";
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
        <div className="menu7-wrapper">
          <div className="menu7-bgImg">
            <img src={bgIMG7} alt="" />
          </div>

          <div className="menu7-wrapper">
            <div className="menu7-container">
              <div className="menu7-itemName-caraosel">
                <div className="slider-container menu7List-text">
                  <Slider className="" {...settings}>
                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu1">BURGER & SANDWICHES</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu2">CHINESE CUSINE</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu3">STARTERS</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu4">SIDES</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu5">SALADS</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu7">MAIN COURSE</Link>
                      </h4>
                    </div>

                    <div className="menu7List-text">
                      <h4>
                        <Link to="/menu8">VALUE COMBO</Link>
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="Maincourse-wrapper">
                <div className="Maincourse-Left">
                  <div className="Maincourse-Text">
                    <h4>MAIN COURSE</h4>
                    {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                  </div>

                  <div className="MaincourseLists-wrapper">
                    <div className="Maincourse-Category">
                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Vegetable Pad Thai</h4>

                          {/* mob view */}
                          <h5>Vegetable Pad Thai</h5>

                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-vejBtn-grn">
                            <span class="Maincourse-vejDot-grn"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Paneer Makhani</h4>
                          {/* mob view */}
                          <h5>Paneer Makhani</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-vejBtn-grn">
                            <span class="Maincourse-vejDot-grn"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Vegetable Biryani</h4>
                          {/* mob view */}
                          <h5>Vegetable Biryani</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-vejBtn-grn">
                            <span class="Maincourse-vejDot-grn"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Eggplant Parmesan</h4>
                           {/* mob view */}
                           <h5>Eggplant <br /> Parmesan</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-nonvejBtn-red">
                            <span class="Maincourse-nonvejDot-red"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Chicken Tikka Masala</h4>
                          {/* mob view */}
                          <h5>Chicken <br />Tikka Masala</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-nonvejBtn-red">
                            <span class="Maincourse-nonvejDot-red"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>
                            Grilled Salmon with Lemon <br />
                            Herb Butter
                          </h4>
                           {/* mob view */}
                           <h5> Grilled Salmon <br /> with Lemon
                            Herb <br /> Butter</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-nonvejBtn-red">
                            <span class="Maincourse-nonvejDot-red"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Maincourse-conteriner">
                        <div className="Maincourse-header-Rs">
                          <h4>Fish Tikka Tacos</h4>
                          {/* mob view */}
                          <h5> Fish Tikka Tacos</h5>
                          <span>149/-</span>
                        </div>

                        <div className="Maincourse-3Btn-vegAdd">
                          <div className="Maincourse-nonvejBtn-red">
                            <span class="Maincourse-nonvejDot-red"></span>
                          </div>

                          <div className="Maincourse-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Maincourse-AddBtn">
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
                    marginTop: "5rem",
                    marginBottom:"5rem"
                  }}
                />

                <div className="pastaRisotto-right">
                  <div className="pastaRisotto-Text">
                    <h4>PASTA AND RISOTTO</h4>
                  </div>

                  <div className="pastaRisottoLists-wrapper">
                    <div className="pastaRisotto-Category">
                      <div className="pastaRisotto-conteriner">
                        <div className="pastaRisotto-header-Rs">
                          <h4>Penne Arrabbiata</h4>
                          {/* mob view */}
                          <h5>Penne Arrabbiata</h5>
                          <span>149/-</span>
                        </div>

                        <div className="pastaRisotto-twoBtn-Add">
                          <div className="pastaRisotto-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="pastaRisotto-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="pastaRisotto-conteriner">
                        <div className="pastaRisotto-header-Rs">
                          <h4>Mushroom Risotto</h4>
                          {/* mob view */}
                          <h5>Mushroom Risotto</h5>
                          <span>149/-</span>
                        </div>

                        <div className="pastaRisotto-twoBtn-Add">
                          <div className="pastaRisotto-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="pastaRisotto-AddBtn">
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
export default MaincomboMenu7;
