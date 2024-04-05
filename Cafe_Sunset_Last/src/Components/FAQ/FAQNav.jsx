import "../FAQ/FAQ.css";


import sunset from "../../Assests/sunset.png"
import acicon from "../../Assests/acicon.png"
import { IoCartOutline } from "react-icons/io5";



import { Link } from "react-router-dom";

function FAQNav() {
  return (
    <>
    <main>
        <div className="FaqMain-Bg">
            <div className="FaqNavbar-width">
                <div className="FaqLogo">
                    <img src={sunset} alt="" />
                </div>

                <div className="FaqnavList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </div>

                <div className="FaqDiv">
                    <Link to="/account"><img src={acicon} alt="" /></Link>
                    <Link to="/mycart"><IoCartOutline className="Faqicon" /></Link>
                </div>
            </div>

            {/* <CartContent/> */}
            
        </div>
    </main>
      
    </>
  );
}
export default FAQNav;