import "../About/About.css";

import Home from "../../Assests/Home.png";
import chefImg from "../../Assests/chefImg.jpeg";
// import { Link } from "react-router-dom"

function About3() {
  return (
    <>
      <div className="about3-wrapper">
        <div className="about3-container">
          <div className="about3-content">
            <div className="about3-paraText about3-right">
              <h2>Sharing Meals, Sharing Hope</h2>
              <p>
                At Sunset Café, we believe in giving back to our community.
                That's why we're proud to share that 1% of our profits go
                towards providing food for orphanages. Because at Sunset, you
                never eat alone; every meal you enjoy is shared with hundreds of
                orphaned children, spreading warmth and nourishment to those who
                need it most. Join us in making a difference, one meal at a
                time. heading for this
              </p>
            </div>

            <div className="abt3Para-img about3-Left">
              <img src={Home} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutlastcomp-wrapper">
        <div className="aboutlast-content">
          <div className="aboutlast-img">
            <img src={chefImg} alt="" />
          </div>

          <div className="last-p">
            <p>
              "Rohit, the friendly  waiter at Sunset Café, <br /> effortlessly connects 
              with regulars, <br /> showcasing exceptional  communication  <br />skill and
              spreading warmth <br />to all."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About3;
