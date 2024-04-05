import "../Blog/BlogNav.css";
import "../Responsive/Responsive.css"
import "../Responsive/FooterResponsive.css"
import "../ResponsiveMobile/MobResponsive.css"


import { BiSearchAlt2 } from "react-icons/bi";

import { BsFillSuitHeartFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";

import sunset from "../../Assests/sunset.png";

import { Link } from "react-router-dom";


function BlogNav() {
  return (
    <>
      <main>
        <div className="BlogNavMain-Bg">
          <div className="BlogNavbar-width">
            <div className="BlogNavtLogo">
              <img src={sunset} alt="" />
            </div>

           



            <div className="BlogNavList">           
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>{" "}
                <span className="blog-heart">
                  <BsFillSuitHeartFill />
                </span>
              </li>
            </div>

            <div className="BlogNavDiv">
              <button>Search Items</button>
            </div>

            {/* Search icon for moble view */}

            {/* <div className="srchIcon-Mobile-view">
                <BiSearchAlt2 />
            </div> */}

            <div className="humburgerMenu">
            <BiSearchAlt2  className="srchIcon-Mobile-view"/>
            <CgMenu />

            </div>

          </div>
        </div>
      </main>
    </>
  );
}
export default BlogNav;
