import React, { useState } from "react";
import "./Contactus.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Contactus() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contactus">
      <div className="contactusMain">
        <div className="mainFirst">
          <div className="firstTop">“Your thoughts matter to us, so drop us a line and let's start a conversation today."</div>
          <div className="firstBottom">
            <div className="bottomLeft">
              <div className="leftTop">
                <img className="addressImg" src="./assets/address.jpg" alt="loginImg" />
              </div>
              <div className="leftMid">Address</div>
              <div className="leftBottom">MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur, Chhattisgarh 492001</div>
            </div>
            <div className="bottomMid">
              <div className="midTop">
                <img className="emailImg" src="./assets/email.jpg" alt="loginImg" />
              </div>
              <div className="midMid">Email</div>
              <div className="midBottom">sunset@gmail.com</div>
            </div>
            <div className="bottomRight">
              <div className="rightTop">
                <img className="contactImg" src="./assets/contact.jpg" alt="loginImg" />
              </div>
              <div className="rightMid">Conatct no.</div>
              <div className="rightBottom">+91-6254777844</div>
            </div>
          </div>
        </div>
        <div className="mainSecond">
          <div className="secondTop">Contact Us
          </div>
          <div className="secondBottom">
            <form className='bottomForm'>
              <label className="fnameLabel" for="fname">First Name</label>
              <input className="fname" type="text" id="fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
              <label className="lnameLabel" for="lname">Last Name</label>
              <input className="lname" type="text" id="lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
              <label className="contactnoLabel" for="contactno">Contact Number</label>
              <input className="contactno" type="number" id="contactno" name="contactno" value={contactno} onChange={(e) => setContactno(e.target.value)} />
              <label className="emailLabel" for="email">Email ID</label>
              <input className="email" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="message" type="text" placeholder='your message for us ...' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
