import "../OrderHistory/OrdrNav.css"

import sunset from "../../Assests/sunset.png";
import acicon from "../../Assests/acicon.png";
import { IoCartOutline } from "react-icons/io5";

import OrderPage from "./OrderPage"


import { Link } from "react-router-dom";


function OrderNav() {
  return (
    <>
      <main>
        <div className="ordrhstry-Bg ordrhstryBG-second">
          <div className="ordrhstryNavbar-width">
            <div className="ordrhstryLogo">
              <img src={sunset} alt="" />
            </div>

            <div className="ordrhstrynavList">
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

            <div className="ordrhstry-Div">
              <Link to="/account">
                <img src={acicon} alt="" />
              </Link>
              <Link to="/mycart">
                <IoCartOutline className="ordrhstryicon" />
              </Link>
            </div>
          </div>
          
          <OrderPage/>
        </div>
      </main>
    </>
  );
}
export default OrderNav;