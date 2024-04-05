import "./DealsCaraosel.css";
import "../Responsive/HomeTab.css";
import Burger from "../../Assests/Burger.png";
import Pizza from "../../Assests/Pizza.png";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

function DealsSection() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const mobsettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <>
      <div className="dealsWrapper">
        <div className="dealsContent">
          <div className="dealsHeader">
            <h3>DEALS AND OFFERS</h3>
          </div>

          <div className="slider-container deals-caraosel">
            <Slider className="dealsCarousel-wrapper" {...settings}>
              <div className="dealsCaraosel-content-container dealsWrapper-Left">
                <div className="dealsCaraosel-content dealscontent-Left">
                  <h3>FLAT</h3>
                  <h2>₹75 OFF</h2>
                  <h4>ON ORDER ABOVE ₹399</h4>
                  <div className="dealsOfr-Btn">
                    <button>
                      <span>Use Code</span>RTH23
                    </button>
                  </div>
                </div>

                <div className="dealsImg dealscontent-Right">
                  <img src={Burger} alt="" />
                </div>
              </div>

              <div className="dealsCaraosel-content-container">
                <div className="dealsCaraosel-content dealscontent-Left">
                  <h3>FLAT</h3>
                  <h2>₹100 OFF</h2>
                  <h4>ON ORDER ABOVE ₹599</h4>
                  <div className="dealsOfr-Btn">
                    <button>
                      <span>Use Code</span>RTH23
                    </button>
                  </div>
                </div>

                <div className="dealsImg dealscontent-Right">
                  <img src={Pizza} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* for mobile view */}

      <div className="mob-deals-wrapper">
        <div className="mobDeals-main-width">
          <div className="mobdealstxt">
            <h3>DEALS AND OFFERS</h3>
          </div>

          {/* <div className="mobdealscaraosel-rectWrapper">
            <div className="mobdealscraosel-rect2">
              <div className="mob-dealstextimg">
                <div className="mobcol1-texts">
                  <h5>FLAT</h5>
                  <h3>₹100 OFF</h3>
                  <h4>ON ORDER ABOVE ₹599</h4>
                  <button>
                    Use Code <span>FGU87</span>
                  </button>
                </div>

                <div></div>
              </div>
            </div>
          </div> */}

          <div className="slider-container mobdealscaraosel-rectWrapper ">
            <div className="mobdealscraosel-rect2">
                <Slider {...mobsettings}>
                  <div className="mob-dealstextimg" >
                    <div className="mobcol1-texts">
                      <h5>FLAT</h5>
                      <h3>₹100 OFF</h3>
                      <h4>ON ORDER ABOVE ₹599</h4>
                      <button>
                        Use Code <span>FGU87</span>
                      </button>                   
                    </div>

                    <div className="mobburgerimg">
                      <img src={Burger} alt="" />
                    </div>
                  </div>


                  <div className="mob-dealstextimg" >
                    <div className="mobcol1-texts">
                      <h5>FLAT</h5>
                      <h3>₹100 OFF</h3>
                      <h4>ON ORDER ABOVE ₹599</h4>
                      <button>
                        Use Code <span>FGU87</span>
                      </button>                   
                    </div>

                    <div className="mobburgerimg">
                    <img src={Pizza} alt="" />
                    </div>
                  </div>
                </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="dealsWrapper">
        <div className="dealsContent">
            <div className="dealsHeader">
                <h3>DEALS AND OFFERS</h3>
            </div>

            <div className="deals-caraosel">
                <div className="dealsCarousel-wrapper">
                    <div className="dealsCaraosel-content-container dealsWrapper-Left">
                        <div className="dealsCaraosel-content dealscontent-Left">
                            <h3>FLAT</h3>
                            <h2>₹75 OFF</h2>
                            <h4>ON ORDER ABOVE ₹399</h4>
                            <div className="dealsOfr-Btn">
                                <button><span>Use Code</span>RTH23</button>
                            </div>
                            
                        </div>

                        <div className="dealsImg dealscontent-Right">
                            <img src={Burger} alt="" />
                        </div>                        
                    </div>

                    <div className="dealsCaraosel-content-container">
                        <div className="dealsCaraosel-content dealscontent-Left">
                            <h3>FLAT</h3>
                            <h2>₹100 OFF</h2>
                            <h4>ON ORDER ABOVE ₹599</h4>
                            <div className="dealsOfr-Btn">
                                <button><span>Use Code</span>RTH23</button>
                            </div>
                            
                        </div>

                        <div className="dealsImg dealscontent-Right">
                            <img src={Pizza} alt="" />
                        </div>                        
                    </div>

                </div>                                
            </div>
            <div className="owlDots" style={{textalign: "center"}}>
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>   
            </div>           
        </div>
      </div> */}
    </>
  );
}
export default DealsSection;
