import "../About/About.css";
import chefImg from '../../Assests/chefImg.jpeg'
// import { Link } from "react-router-dom"

function Aboutus() {
  return (
    <>
      <div className="aboutus-wrapper">
        <div className="aboutus-content">
          {/* <div className="aboutusHeader">
            <h2>ABOUT US</h2>
          </div> */}

          <div className="aboutusStory-Wrapper">
            <div className="aboutusStory-txt aboutusWrapperLeft">
              <h1>The story behind sunset ...</h1>

              <div className="aboutusParagraph">
                <p>
                  Welcome to Sunset Café, where our journey began with Chef
                  André's bold decision to depart from the world of haute
                  cuisine and create a culinary sanctuary rooted in simplicity
                  and heartfelt connection. <br /> <br /> Inspired by a chance encounter with
                  a charming café bathed in the warm glow of twilight, Chef
                  André envisioned a place where genuine hospitality and
                  exceptional flavors intertwine. At Sunset Café, each dish is a
                  reflection of Chef André's dedication to crafting culinary
                  experiences that nourish both body and soul.
                </p>
                
                </div>
            </div>

            <div className="about-uschefSectionRight">
                <div className="aboutus-chefImg">
                    <img src={chefImg} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Aboutus;
