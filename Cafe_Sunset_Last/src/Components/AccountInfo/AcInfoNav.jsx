import "../AccountInfo/AcNav.css";

import sunset from "../../Assests/sunset.png";
import acicon from "../../Assests/acicon.png";
import { IoCartOutline } from "react-icons/io5";

import AcInfo from "./AcInfo"

import { Link } from "react-router-dom";


function AcInfoNav() {
  return (
    <>
      <main>
        <div className="acInfo-Bg acInfoBG-second">
          <div className="acInfoNavbar-width">
            <div className="acInfoLogo">
              <img src={sunset} alt="" />
            </div>

            <div className="AcInfonavList">
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
                <Link to="/blog">Blog</Link>
              </li>
            </div>

            <div className="acInfo-Div">
              <Link to="/account">
                <img src={acicon} alt="" />
              </Link>
              <Link to="/mycart">
                <IoCartOutline className="acInfoicon" />
              </Link>
            </div>
          </div>
          <AcInfo/>
        </div>
      </main>
    </>
  );
}
export default AcInfoNav;