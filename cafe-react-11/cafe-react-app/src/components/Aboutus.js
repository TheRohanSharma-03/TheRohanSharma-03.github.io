import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutusMain">
        <div className="mainFirst">
          <div className="firstLeft">
            <div className="leftTop">The story behind sunset ...</div>
            <div className="leftBottom">
              <p>
                Welcome to Sunset Café, where our journey began with Chef
                André's bold decision to depart from the world of haute cuisine
                and create a culinary sanctuary rooted in simplicity and
                heartfelt connection.
              </p>
              <p>
                Inspired by a chance encounter with a charming café bathed in
                the warm glow of twilight, Chef André envisioned a place where
                genuine hospitality and exceptional flavors intertwine. At
                Sunset Café, each dish is a reflection of Chef André's
                dedication to crafting culinary experiences that nourish both
                body and soul.
              </p>
            </div>
          </div>
          <div className="firstRight">
            <div className="rightCircle" id="rightCircle"></div>
            <div className="rightImage" id="rightImage">
              <img
                className="rightImageImg"
                src="./assets/chef.jpg"
                alt="userLogo.jpg"
              />
            </div>
          </div>
        </div>

        <div className="mainSecond">
          <div className="secondLeft">
            <img
              className="aboutusImg"
              src="./assets/aboutusImg.jfif"
              alt="userLogo.jpg"
            />
          </div>
          <div className="secondRight">
            At Sunset Café, our mission is deeply personal. Inspired by Chef
            André's journey and fueled by his passion for heartfelt connection,
            we've crafted a culinary sanctuary where every bite tells a story
            and every moment is cherished. With a commitment to authenticity,
            warmth, and sustainability, we invite you to join us in creating
            memories over delicious dishes that nourish both body and soul.
            Here, amidst the comforting glow of twilight, we celebrate community
            and the simple joys of shared meals. Welcome to our table; we can't
            wait to share our story with you.
          </div>
        </div>

        <div className="mainThird">
          <div className="thirdLeft">
            <img
              className="aboutusImg"
              src="./assets/aboutusImg.jfif"
              alt="userLogo.jpg"
            />
          </div>
          <div className="thirdRight">
            <div className="rightTop"> Sharing Meals, Sharing Hope</div>
            <div className="rightBottom">
              <p>
                At Sunset Café, we believe in giving back to our community.
                That's why we're proud to share that 1% of our profits go
                towards providing food for orphanages. Because at Sunset, you
                never eat alone; every meal you enjoy is shared with hundreds of
                orphaned children, spreading warmth and nourishment to those who
                need it most. Join us in making a difference, one meal at a
                time.heading for this
              </p>
            </div>
          </div>
        </div>

        <div className="mainFourth">
          <div className="fourthLeft">
            <img
              className="aboutusImg"
              src="./assets/aboutusImg.jfif"
              alt="userLogo.jpg"
            />
          </div>
          <div className="fourthRight">
            At Sunset Café, our mission is deeply personal. Inspired by Chef
            André's journey and fueled by his passion for heartfelt connection,
            we've crafted a culinary sanctuary where every bite tells a story
            and every moment is cherished. With a commitment to authenticity,
            warmth, and sustainability, we invite you to join us in creating
            memories over delicious dishes that nourish both body and soul.
            Here, amidst the comforting glow of twilight, we celebrate community
            and the simple joys of shared meals. Welcome to our table; we can't
            wait to share our story with you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
