import "../Blog1/Blog1st.css";

import sala from "../../../Assests/sala.jpg";
import infusion from "../../../Assests/infusion.jpg";

import liveImg1 from "../../../Assests/liveImg1.jpg";
import liveImg2 from "../../../Assests/liveImg2.jpg";
import liveImg3 from "../../../Assests/liveImg3.jpg";
import liveImg4 from "../../../Assests/liveImg4.jpg";

import { IoChevronDown } from "react-icons/io5";

import React from "react";
import Slider from "react-slick";

// import { Link } from "react-router-dom";

function Blog1st() {
  const mobslidersettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <main>
        <div className="page1Blog-wrapper">
          <div className="page1Blog-container">
            <div className="exlsv1-Header">
              <h1>#1 Exclusive</h1>
            </div>

            <div className="pg1blog-para">
              <h3>
                Unlock a World of Culinary Luxury and Tranquil Moments <br /> &
                Much More.
              </h3>
            </div>

            <hr className="blog1sthr-1stsec" style={{ borderColor: "#D16E43", margin: "2rem 0 0 25rem" }} />

            <div className="page1blg-sec2">
              <div className="sec2-Header">
                <h1>Newly Added</h1>
              </div>

              <div className="sec2Main-container">
                <div className="blog1-sec2Left">
                  <div className="blog1sec2-header">
                    <h2>
                      Mango Tango <br />
                      Fusion Salad:
                    </h2>
                    <div className="blog1-mangoTango-div">
                      <img src={sala} alt="" />
                      <p>
                        Dive into a refreshing symphony of <br /> flavors with
                        our Mango Tango <br />
                        Fusion Salad. Crisp mixed greens, <br /> juicy mango
                        slices, and cherry <br /> tomatoes are tossed with a
                        zesty <br /> mango-lime dressing, creating a <br />{" "}
                        burst of tropical goodness on your <br />
                        palate. Topped with grilled chicken <br /> for a protein
                        boost and garnished <br />
                        with crunchy almond slivers
                      </p>
                    </div>
                  </div>
                </div>

                <hr style={{ borderColor: "#D16E43" }} />

                <div className="blog1-sec2Right">
                  <div className="blog1sec2-header">
                    <h2>
                      Spiced Infusion <br /> Sea Bass:
                    </h2>
                    <div className="blog1-mangoTango-div">
                      <img src={infusion} alt="" />
                      <p>
                        Immerse yourself in the bold and <br />
                        aromatic notes of our Spiced <br />
                        Infusion Sea Bass. Fresh fillets of <br />
                        sea bass are delicately seasoned <br /> with a blend of
                        Indian spices, <br />
                        including cumin, coriander, and <br /> turmeric, then
                        seared to perfection. <br /> Served on a bed of
                        saffron-infused <br /> basmati rice and accompanied by a{" "}
                        <br />
                        side of mint-cilantro chutney, this <br /> dish is a
                        celebration of coastal <br /> flavors with a touch of
                        Indian flair.
                      </p>
                    </div>
                  </div>
                </div>                
              </div>
            </div>

            {/* for mobile viwe */}

            <div className="blog12ndSec-mobileview">
                  <div className="slider-container blog1caraosel-mob">
                    <Slider {...mobslidersettings}>
                      <div className="mobview-header">
                        <h4>Mango Tango Fusion Salad:</h4>
                          <img src={sala} alt="" />
                          <p>
                          Dive into a refreshing symphony of flavors with our Mango Tango Fusion Salad. Crisp mixed greens, juicy mango slices, and cherry tomatoes are tossed with a zesty mango-lime dressing, creating a burst of tropical goodness on your palate. Topped with grilled chicken for a protein boost and garnished with crunchy almond slivers
                          </p>

                      </div>
                      <div className="mobview-header">
                        <h4>Spiced Infusion Sea Bass:</h4>
                          <img src={infusion} alt="" />
                          <p>
                          Immerse yourself in the bold and aromatic notes of our Spiced Infusion Sea Bass. Fresh fillets of sea bass are delicately seasoned with a blend of Indian spices, including cumin, coriander, and turmeric, then seared to perfection. Served on a bed of saffron-infused basmati rice and accompanied by a side of mint-cilantro chutney, this dish is a celebration of coastal flavors with a touch of Indian flair.
                          </p>

                      </div>
                    </Slider>
                  </div>
                </div>

            

            <hr style={{ borderColor: "#D16E43" }} />

            <div className="blog1sec3">
              <h2>Become a Sunset Insider: Join Our Exclusive Community</h2>
              <li>
                Newsletter: Subscribe to our newsletter for sneak peeks,
                exclusive recipes, and members-only offers.
              </li>
              <li>
                Sunset Insider Club: Unlock premium benefits by becoming a part
                of our exclusive membership program.
              </li>
              <h5>
                Indulge in the Extraordinary. Reserve Your Seat for an Exclusive
                Culinary Soiree at Café Sunset.
              </h5>
            </div>

            <hr style={{ borderColor: "#D16E43", margin: "0 35rem 2rem 0" }} />

            <div className="blog1sec4">
              <h4>Limited-Time Exclusive Events:</h4>
              <li>
                Sunset Symphony Night: An evening of live music, exclusive
                dishes, and a curated selection of wines. Limited seats
                available. Reserve now.
              </li>
              <li>
                Chef's Table Experience: Join our head chef for an intimate
                dining experience featuring a specially crafted menu. Limited to
                a select few connoisseurs.
              </li>
            </div>

            

            

            <hr className="blob1st-lastbottomhr" style={{ borderColor: "#D16E43", margin: "1.5rem 0 2rem 0"}} />

            <div className="blog1sec5Last">
              <h3>WHERE WE’VE BEEN FEATURED</h3>
              <div className="liveEvent-img">
                <img src={liveImg1} alt="" />
                <img src={liveImg2} alt="" />
                <img src={liveImg3} alt="" />
                <img src={liveImg4} alt="" />
              </div>
            </div>

            {/* for mobile view */}

            <IoChevronDown className="blog1stscrolDown-mob" />

            
          </div>
          
        </div>
      </main>
    </>
  );
}
export default Blog1st;
