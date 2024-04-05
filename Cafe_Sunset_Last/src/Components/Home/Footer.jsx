import "./Style.css";
import fbImg from "../../Assests/fbImg.png";
import InstaImg from "../../Assests/InstaImg.png"
import wpImg from "../../Assests/wpImg.png"
import XImg from "../../Assests/XImg.png"

import { FaChevronDown } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerWrapper-Bg">
        <div className="footerContainer">
          <div className="footerContainer-Address">
            <h2>Address</h2>
            <p>
              Cafe Plot No. 45, Street No.14 <br /> Marol MIDC Industry <br />{" "}
              Estate, <br /> Andheri <br /> East,Mumbai-400093
            </p>
          </div>

          <div className="footerContainer-Help">
            <h2>Help & Info</h2>
            <div className="helpSection-content">
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="Career.html">Career</a>
              </li>
              <li>
                {/* <a href="faq.html">FAQs</a> */}
                <Link to="/FAQ">FAQs</Link>
              </li>
            </div>
          </div>
          <div className="footerContainer-Contact">
            <h2>Contact Us</h2>
            <div className="contactSection-content">
              <li>1809-908-5647</li>
              <li>
                <a href="Career.html">Get in Touch</a>
              </li>
              <li>
                <a href="faq.html">Chat With us</a>
              </li>
            </div>
          </div>

          <div className="footerContainer-LastColumn">
            <h2>Useful Links</h2>

            <div className="usefulSection-content">
              <li>
                <a href="index.html">Privacy Policy</a>
              </li>
              <li>
                <a href="index.html">Terms of Service</a>
              </li>
              <li>
                <a href="index.html">Payment Issues</a>
              </li>
              <li>
                <a href="index.html">Net Banking</a>
              </li>
              <li>
                <a href="index.html">Custom Order</a>
              </li>
            </div>
          </div>
          
          {/* footer for mobile view */}

          <div className="footerMobieview">
            <div className="footer-address">
              <h2>Address</h2>
              <p>
                Cafe Plot No. 45, Street No.14 <br /> Marol MIDC Industry <br />{" "}
                Estate, <br /> Andheri <br /> East,Mumbai-400093
              </p>
            </div>

            <div className="ftrMblList">
              <li>About us <FaChevronDown className="ftrMobileView" /></li>
              <hr style={{borderColor:"#D71919", margin: "0 0 5px 0"}} />
              <li>Terms of use <FaChevronDown className="ftrMobileView" /></li>
              <hr style={{borderColor:"#D71919", margin: "0 0 5px 0"}} />
              <li>Services <FaChevronDown className="ftrMobileView" /></li>
              <hr style={{borderColor:"#D71919", margin: "0 0 5px 0"}} />
              <li>Policies <FaChevronDown className="ftrMobileView" /></li>
            </div>

            

          </div>
      </div>

      <div className="footerWrappr-socialIcons">
          <h4>Follow Us on :</h4>
            <img src={fbImg} alt="" />
            <img src={InstaImg} alt="" />
            <img src={wpImg} alt="" />
            <img src={XImg} alt="" />         
        </div>

        

        <div className="copyright-wrpper">
            <h3>@2023 Railworld India. All Rights Reserved</h3>
        </div>
      </div>
    </>
  );
}
export default Footer;
