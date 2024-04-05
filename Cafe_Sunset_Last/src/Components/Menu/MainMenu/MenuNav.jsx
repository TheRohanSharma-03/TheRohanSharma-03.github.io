import './MenuNav.css'
import sunset from "../../../Assests/sunset.png";

import { BsSearch } from "react-icons/bs";



import { Link } from "react-router-dom";

function MenuNav() {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="Menu-bgImg1">
            <center>
              <div className="menu-nav-wrapper">
                <div className="menu-logo">
                  <img src={sunset} alt="" />
                </div>

                <div className="Main-menu">
                  <ol className="Main-menuList">
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
                    <button className="search-btn-menu"><BsSearch className='Ba-search-btn'/> Search Items </button>
                    </li>  
                  </ol>
                  
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuNav;
