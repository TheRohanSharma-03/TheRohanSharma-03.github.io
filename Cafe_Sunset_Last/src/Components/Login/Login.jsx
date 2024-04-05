import "../Login/Login.css";

import LoginImg from "../../Assests/LoginImg.png"

import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main>
        <div className="login-wrapper">
          <div className="loginHeader">
            <h2>Log In</h2>

            <div className="login-input-wrap">
              <div className="login-p login-left">
                <p>Log in to your Account.</p>

                <div className="login-input">
                    <input type="text" name="username" placeholder="Username.." />
                    <input type="text" name="lastname" placeholder="Password" />                    
                </div>

                <div className="forgot-p">
                    <p><Link to="/Forgot Password">Forgot Password ?</Link></p>

                    <button>Submit</button>
                </div>
                

                
              </div>

                <div className="loginImg login-right">
                    <img src={LoginImg} alt="" />
                
                </div>             
            </div>


          </div>
        </div>
      </main>
    </>
  );
}
export default Login;
