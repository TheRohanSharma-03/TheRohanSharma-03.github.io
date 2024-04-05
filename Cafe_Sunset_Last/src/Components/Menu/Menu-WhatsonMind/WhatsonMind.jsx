import "../Menu-WhatsonMind/WhatsonMind.css";

import bgIMG1 from "../../../Assests/bgIMG1.jpeg";

import BurgerSandwich from "../../../Assests/BurgerSandwich.jpeg"
import CHINESE from "../../../Assests/CHINESE.jpeg.png"
import STARTERS from "../../../Assests/STARTERS.jpeg.png"
import Sides from "../../../Assests/Sides.png"
import salad from "../../../Assests/salad.jpeg"
import Desert from "../../../Assests/Desert.png"
import Main from "../../../Assests/Main.png"
import bestofrImg3 from "../../../Assests/bestofrImg3.jpeg"
import Beverage from "../../../Assests/Beverage.png"

import { FaChevronDown } from "react-icons/fa";

import { Link } from "react-router-dom";

function WhatsonMind() {
  return (
    <>
      <main>
        <div className="whatson-Wrapper">
          <div className="Whatson-Bg-Img">
            <img src={bgIMG1} alt="" />
          </div>
        </div>

        <div className="whatonmindText-wrapper">
          <div className="whatonmindText-container">
            <div className="whatsonmind-text">
              <div className="tabmainmenu-hr"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "35vw",
                  height: "1px",
                  display: "inline-flex",
                  margin: "10px 20px",
                }}
              >
                {" "}
              </div>
              <h4>WHAT’S ON YOUR MIND?</h4>
              <div className="tabmainmenu-hr"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "35vw",
                  height: "1px",
                  display: "inline-flex",
                  margin: "10px 20px",
                }}
              >
                {" "}
              </div>
            </div>

            <div className="menuList-wrapper">
                <div className="menuList-Img-Text">
                    <img src={BurgerSandwich} alt="" />
                    <h4> <Link to="/menu1">BURGER & SANDWICHES</Link></h4>
                </div>

                <div className="menuList-Img-Text">
                    <img src={CHINESE} alt="" />
                    <h4><Link to="/menu2">CHINESE CUSINE</Link></h4>
                </div>

                <div className="menuList-Img-Text">
                    <img src={STARTERS} alt="" />
                    <h4><Link to="/menu3">STARTERS</Link></h4>
                </div>

                <div className="menuList-Img-Text">
                    <img src={Sides} alt="" />
                    <h4><Link to="/menu4">SIDES</Link></h4>
                </div>

                <div className="menuList-Img-Text">
                    <img src={salad} alt="" />
                    <h4><Link to="/menu5">SALADS</Link></h4>
                </div>


                <div className="menuList-Img-Text">
                    <img src={Desert} alt="" />
                    <h4><Link to="/menu6">DESSERTS / ICE-CREAM</Link></h4>
                </div>


                <div className="menuList-Img-Text">
                    <img src={Main} alt="" />
                    <h4><Link to="/menu7">MAIN COURSE</Link></h4>
                </div>

                <div className="menuList-Img-Text">
                    <img src={bestofrImg3} alt="" />
                    <h4><Link to="/menu8">VALUE COMBO</Link></h4>
                </div>


                <div className="menuList-Img-Text">
                    <img src={Beverage} alt="" />
                    <h4><Link to="/menu">BEVERAGES</Link></h4>
                </div>
            </div>

            <div className="seeMore-icon-div">  
            <FaChevronDown className="seeMore-icon" />
            <h4>See More</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default WhatsonMind;
