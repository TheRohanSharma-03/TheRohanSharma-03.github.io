import "./Style.css";
import chefImg from '../../Assests/chefImg.jpeg'
import { Link } from "react-router-dom"

function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-content">
          <div className="aboutHeader">
            <h2>ABOUT US</h2>
          </div>

          <div className="aboutStory-Wrapper">
            <div className="aboutStory-txt aboutWrapperLeft">
              <h1>The story behind sunset ...</h1>

              <div className="aboutParagraph">
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

                <div className="readMore-btn">
                    <button> <Link to="/About">READ MORE</Link></button>
                </div>
                </div>
            </div>

            <div className="chefSectionRight">
                <div className="chefImg">
                    <img src={chefImg} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
