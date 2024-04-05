import "../Contact/Contact.css";

import location from "../../Assests/location.png";
import email1 from "../../Assests/email1.png";
import contact2 from "../../Assests/contact2.png";

// import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <main>
        <div className="contact-wrapper">
          <div className="contact-container">
            <div className="contactPara">
              <h1>
                {" "}
                “Your thoughts matter to us, so <br /> drop us a line and let's
                start a <br />
                conversation today."
              </h1>
            </div>

            <div className="locationEmail-flex">
              <div className="lctnEmail-wrapper">
                <img src={location} alt="" />
                <h4>Address</h4>
                <p>
                  MFC Center, Railway Station, Amazing Hotel, near Raipur,
                  Raipur, Chhattisgarh 492001s
                </p>
              </div>

              <div className="lctnEmail-wrapper">
                <img src={email1} alt="" />
                <h4>Email</h4>
                <p>sunset@gmail.com</p>
              </div>

              <div className="lctnEmail-wrapper">
                <img src={contact2} alt="" />
                <h4>Conatct no.</h4>
                <p>+91-6254777844</p>
              </div>
            </div>

            <hr />

            <div className="contact-form-wrapper">
              <div className="contactHeader">
                <h2>Contact Us</h2>
                <div className="formContent">
                  <div>
                    <h4>First Name</h4>
                    <input type="text" name="name" />
                  </div>

                  <div>
                    <h4>Last Name</h4>
                    <input type="text" name="lastname" id="" />
                  </div>
                </div>

                <div className="formContent">
                  <div>
                    <h4>Contact Number</h4>
                    <input type="text" name="name" />
                  </div>

                  <div>
                    <h4>Email ID</h4>
                    <input type="text" name="lastname" id="" />
                  </div>
                </div>

                <div className="mesg-div">
                  <input type="text" placeholder="your message for us....." />
                </div>

                <button className="cntctSbmt-Btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Contact;
