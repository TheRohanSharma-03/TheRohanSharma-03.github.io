import "../About/About.css";

import Home from "../../Assests/Home.png";
// import { Link } from "react-router-dom"

function About2() {
  return (
    <>
      <div className="about2-wrapper">
        <div className="about2-container">
          <div className="about2-content">
            <div className="abtPara-img about-Left">
              <img src={Home} alt="" />
            </div>

            <div className="about2-paraText about-right">
              <p>
                At Sunset Café, our mission is deeply personal. Inspired by Chef
                André's journey and fueled by his passion for heartfelt
                connection, we've crafted a culinary sanctuary where every bite
                tells a story and every moment is cherished. With a commitment
                to authenticity, warmth, and sustainability, we invite you to
                join us in creating memories over delicious dishes that nourish
                both body and soul. Here, amidst the comforting glow of
                twilight, we celebrate community and the simple joys of shared
                meals. Welcome to our table; we can't wait to share our story
                with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About2;
