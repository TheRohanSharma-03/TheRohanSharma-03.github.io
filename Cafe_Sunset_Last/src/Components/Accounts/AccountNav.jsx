import "../Accounts/Account.css";

import sunset from "../../Assests/sunset.png";
import acicon from "../../Assests/acicon.png";
import { IoCartOutline } from "react-icons/io5";

import Accountcontainer from "./Accountcontainer"

import { Link } from "react-router-dom";

function AccountNav() {
  return (
    <>
      <main>
        <div className="acMain-Bg acBG-second">
          <div className="acNavbar-width">
            <div className="acLogo">
              <img src={sunset} alt="" />
            </div>

            <div className="ACnavList">
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

            <div className="ac-Div">
              <Link to="/account">
                <img src={acicon} alt="" />
              </Link>
              <Link to="/mycart">
                <IoCartOutline className="acicon" />
              </Link>
            </div>
          </div>

          <Accountcontainer/>
        </div>
      </main>
    </>
  );
}
export default AccountNav;
