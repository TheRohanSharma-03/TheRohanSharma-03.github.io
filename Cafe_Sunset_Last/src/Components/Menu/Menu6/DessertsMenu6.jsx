import "../Menu6/Menu6.css";

import bgIMG6 from "../../../Assests/bgIMG6.png";
import React from "react";
import Slider from "react-slick";


import { FaPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";

function DesertsMenu6() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <main>
        <div className="menu6-wrapper">
          <div className="menu6-bgImg">
            <img src={bgIMG6} alt="" />
          </div>

          <div className="menu6-wrapper">
            <div className="menu6-container">
              <div className="menu6-itemName-caraosel">
                <div className="slider-container .menu6List-text">
                  <Slider className="" {...settings}>
                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu1">BURGER & SANDWICHES</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu2">CHINESE CUSINE</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu3">STARTERS</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu4">SIDES</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu5">SALADS</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu6">DESSERTS / ICE-CREAM</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu7">MAIN COURSE</Link>
                      </h4>
                    </div>

                    <div className="menu6List-text">
                      <h4>
                        <Link to="/menu8">VALUE COMBO</Link>
                      </h4>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="desert-wrapper">
                <div className="desert-Left">
                  <div className="desert-Text">
                    <h4>SALAD</h4>
                    {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                  </div>

                  <div className="desertLists-wrapper">
                    <div className="desert-Category">
                      <div className="desert-conteriner">
                        <div className="desert-header-Rs">
                          <h4>Classic NewYork Cheese Cake</h4>
                          {/* mob view */}
                          <h5>Classic NewYork <br /> Cheese Cake</h5>
                          <span>159/-</span>
                        </div>

                        <div className="desert-twoBtn-vegAdd">
                          
                          <div className="desert-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="desert-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="desert-conteriner">
                        <div className="desert-header-Rs">
                          <h4>Moltane Chocolate Lava Cake</h4>
                          {/* mob view */}
                          <h5>Moltane Chocolate <br /> Lava Cake</h5>
                          <span>149/-</span>
                        </div>

                        <div className="desert-twoBtn-vegAdd">
                          
                          <div className="desert-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="desert-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="desert-conteriner">
                        <div className="desert-header-Rs">
                          <h4>Tiramisu</h4>
                          {/* mob view */}
                          <h5>Tiramisu</h5>
                          <span>139/-</span>
                        </div>

                        <div className="desert-twoBtn-vegAdd">
                          
                          <div className="desert-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="desert-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                    

                      <div className="desert-conteriner">
                        <div className="desert-header-Rs">
                          <h4>Lemon Meringue Tart</h4>
                           {/* mob view */}
                           <h5>Lemon Meringue Tart</h5>
                          <span>139/-</span>
                        </div>

                        <div className="salad-threeBtn-vegAdd">
                    

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
                    // height: "60vh",
                    border: "1px solid #F6FA11",
                    marginTop: "5rem",
                    marginBottom:"5rem"
                  }}
                />

                <div className="Sundaes-right">
                  <div className="Sundaes-Text">
                    <h4>DESSERETES & SUNDAES</h4>
                  </div>

                  <div className="SundaesLists-wrapper">
                    <div className="Sundaes-Category">
                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4> Vanilla Bean</h4>
                          {/* mob view */}
                          <h5>Vanilla Bean</h5>                       
                          <span>149/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4>  Chocolate Fudge Brownie</h4>
                          {/* mob view */}
                          <h5>Chocolate  <br />Fudge Brownie</h5>                        
                          <span>139/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4>Mango Sorbet</h4> 
                          {/* mob view */}
                          <h5>Mango Sorbet</h5>                       
                          <span>149/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4>Strawberry Swirl</h4>
                          {/* mob view */}
                          <h5>Strawberry Swirl</h5>                         
                          <span>139/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4>Banana Split</h4>
                          {/* mob view */}
                          <h5>Banana Split</h5>                        
                          <span>149/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sundaes-conteriner">
                        <div className="Sundaes-header-Rs">
                          <h4>Caramel Crunch Sundae</h4> 
                          {/* mob view */}
                          <h5>Caramel <br /> Crunch Sundae</h5>                        
                          <span>139/-</span>
                        </div>

                        <div className="Sundaes-twoBtn-Add">
                          <div className="Sundaes-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="Sundaes-AddBtn">
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
export default DesertsMenu6;
