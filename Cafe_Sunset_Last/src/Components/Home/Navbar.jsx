import "./Style.css";
import "../Responsive/HomeTab.css"
// import Welcom from "./Welcom";
import Welcom from "./Welcom"

import sunset from "../../Assests/sunset.png";
import acicon from "../../Assests/acicon.png";
import cart1 from "../../Assests/cart1.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="bgImg1 background-tint">
          <center>
            <div className="nav-wrapper">
              <div className="logo">
                <img src={sunset} alt="" />
              </div>

              <div className="menu">
                <ol className="menuList">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/signin">
                      <span>SignIn | <Link to="/Login">Login</Link></span>
                    </Link>
                  </li>
                  <span>
                    <li className="profileImg">
                      <Link to="/account">
                        {" "}
                        <img src={acicon} alt="" />{" "}
                      </Link>
                    </li>
                  </span>
                  <li className="cartImg">
                    <Link to="/mycart">
                      {" "}
                      <img src={cart1} alt="" />{" "}
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <Welcom />
          </center>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
