import React, { useState } from 'react'
import './Forgetpass.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Forgetpass() {
  const [email, setEmail] = useState("");
  return (
    <div className='forgetPass'>
        <div className='forgetPassMain'>
            <div className='mainLeft'>
            <div className='mainTop'>Forgot Password ?</div>
            <div className='mainBottom'>
              <div className='bottomTop'>Enter the Email address associated with your account to get a code.</div>
              <form className='bottomForm'>
                <input className="email" type="text" placeholder='Enter email address' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="submit" type="submit" value="Send Code" />
              </form>
              <div className='bottomBottom'>
                <button className='bottomRight'>Back to login</button>
              </div>
            </div>
            </div>
            <div className='mainRight'>
                <img className="forgetPassImg" src="./assets/forgetPassImg.png" alt="loginImg" />
            </div>
        </div>
    </div>
  )
}

export default Forgetpass