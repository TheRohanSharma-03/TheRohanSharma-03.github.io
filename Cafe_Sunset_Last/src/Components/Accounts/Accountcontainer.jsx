import "../Accounts/AcContainer.css";

import { Link } from "react-router-dom";

function Accountcontainer() {
  return (
    <>
      <main>
        <div className="myac-container">
          <div className="myac-wrapper">
            <div className="ac-content-left ">
              <div className="ac-headers vl">
                <h3>My Account</h3>
                <h4>
                  <Link to="/acountInfo">Account Information</Link>
                </h4>
                <h4>
                  {" "}
                  <Link to="/ordrhstry">Your Order</Link>
                </h4>
              </div>
            </div>

            <div className="acDetails-right">
              <div className="acHeader-Text">
                <h3>MY ACCOUNT</h3>
                <h2 className="acInfoHeader">ACCOUNT INFORMATION</h2>
                <hr />

                <h4>CONTACT INFORMATION</h4>

                <div className="prsnlInfo-Text">
                  <span>NiTi Dewangan</span>
                  <br />
                  <span>nitidewangan20@gmail.com</span>
                </div>

                <h2 className="adrHeader">
                  ADDRESS BOOK <span>Manage Addresses</span>
                </h2>
                <hr />

                <div className="billing-adrs">
                  <h4>DEFAULT BILLING ADDRESS</h4>
                  <p>You have not set a default billing address.</p> <br />
                  <span>Edit Address</span>
                  <h4>DEFAULT SHIPPING ADDRESS</h4>
                  <p>You have not set a default shipping address.</p>
                  <span>Edit Address</span>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="letus-header">
            <h1>Let us reach you</h1>


            <div className="letsbtn">
              <input type="email" name="email" id="email" placeholder="your E-Mail ID" />
              <button> SUBMIT </button>
            </div>
            

          </div>

          


        </div>


        
      </main>
    </>
  );
}
export default Accountcontainer;
