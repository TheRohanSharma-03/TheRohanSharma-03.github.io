import React, { useState } from 'react'
import './Signup.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  return (
    <div className='signup'>
        <div className='signupMain'>
            <div className='mainTop'>Register</div>
            <div className='mainBottom'>
              <div className='bottomTop'>Signup now and get full access to our app.</div>
              <form className='bottomForm'>
                <input className="fname" type="text" placeholder='Firstname' id="fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                <input className="lname" type="text" placeholder='Lastname' id="lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                <input className="email" type="text" placeholder='Email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="pass" type="text" placeholder='Password' id="pass" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
                <input className="cpass" type="text" placeholder='Confirm Password' id="cpass" name="cpass" value={cpass} onChange={(e) => setCpass(e.target.value)} />
                <input className="submit" type="submit" value="Submit" />
              </form>
              <div className='bottomBottom'>
                <p className='bottomLeft'>Already have an Acount ?</p>
                <button className='bottomRight'>Login</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Signup