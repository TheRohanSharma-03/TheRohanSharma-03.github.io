import "../Mycart/Cart.css";

import CartContent from "./CartContent";

import sunset from "../../Assests/sunset.png"
import acicon from "../../Assests/acicon.png"
import { IoCartOutline } from "react-icons/io5";



import { Link } from "react-router-dom";

function CartNav() {
  return (
    <>
    <main>
        <div className="cartMain-Bg">
            <div className="cartNavbar-width">
                <div className="cartLogo">
                    <img src={sunset} alt="" />
                </div>

                <div className="navList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </div>

                <div className="cartDiv">
                    <Link to="/account"><img src={acicon} alt="" /></Link>
                    <Link to="/mycart"><IoCartOutline className="carticon" /></Link>
                </div>
            </div>

            <CartContent/>
            
        </div>
    </main>
      
    </>
  );
}
export default CartNav;
