import React, { useState } from 'react'
import './Login.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className='login'>
        <div className='loginMain'>
            <div className='mainLeft'>
            <div className='mainTop'>Login</div>
            <div className='mainBottom'>
              <div className='bottomTop'>Log in to your Account</div>
              <form className='bottomForm'>
                <input className="username" type="text" placeholder='Username' id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="pass" type="text" placeholder='Password' id="pass" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
                <input className="submit" type="submit" value="Submit" />
              </form>
              <div className='bottomBottom'>
                <button className='bottomRight'>Forgot Password ?</button>
              </div>
            </div>
            </div>
            <div className='mainRight'>
                <img className="loginImg" src="./assets/loginImg.png" alt="loginImg" />
            </div>
        </div>
    </div>
  )
}

export default Login