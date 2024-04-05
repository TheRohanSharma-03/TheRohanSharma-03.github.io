import "./Style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

function MotivationCaraosel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>

<div className="slider-container motivationImg-bg background-tint">
        <div className="mtvton-Header">
          <h1>Motivation Being By Our Hard Work</h1>
          <Slider className="mtvton-Prgph" {...settings}>
            <div>
              <p>
                "I just had the best time at Sunset Cafe! It was so cozy and
                welcoming. The coffee smelled amazing, and the people there were
                so friendly. The food? Delicious! I can't wait to go back again
                and again. It's definitely my new favorite spot!"
              </p>
            </div>

            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ab aliquam odit distinctio explicabo consequatur, autem repudiandae atque eos necessitatibus ea, voluptatem facilis, ipsam qui?
              </p>
            </div>
          </Slider>
        </div>
        <div className="newsletter-Headers">
          <div className="newsletter-txt">
          <h1>Subscribe To Newsletter</h1>
          <span>and Get -20% off</span>
          <p>
            Your Gateway to Serenity, Culinary Delights, and Unforgettable
            Moments.
          </p>
          <div className="newsletter-InputBtn">
            <input type="email" placeholder="Enter email address..." />
            <button className="homesubBtn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="motivationImg-bg background-tint">
        <div className="mtvton-Header">
          <h1>Motivation Being By Our Hard Work</h1>
          <div className="mtvton-Prgph">
            <p>
              "I just had the best time at Sunset Cafe! It was so cozy and
              welcoming. The coffee smelled amazing, and the people there were
              so friendly. The food? Delicious! I can't wait to go back again
              and again. It's definitely my new favorite spot!"
            </p>
          </div>

          <div className="owlDots" style={{textalign: "center"}}>
            <span class="mtvton-dot" onclick="currentSlide(1)"></span>
            <span class="mtvton-dot" onclick="currentSlide(2)"></span>
            <span class="mtvton-dot" onclick="currentSlide(3)"></span>   
          </div>
        </div>

        <div className="newsletter-Headers">
            <div className="newsletter-txt">
                <h1>Subscribe To Newsletter</h1>
                <span>and Get -20% off</span>
                <p>Your Gateway to Serenity, Culinary Delights, and Unforgettable Moments.</p>
                <div className="newsletter-InputBtn">
                    <input type="email" placeholder="Enter email address..." />
                    <button>SUBSCRIBE</button>
                </div>               
            </div>
        </div>
      </div> */}
    </>
  );
}
export default MotivationCaraosel;
