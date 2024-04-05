import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className="footer" id="footer">
    <div className="footerMain" id="footerMain">
      <div className="mainTop">
        <div className="topTop">
          <div className="topAddress">
            <div className="title">Address</div>
            <div className="subtitle">Cafe Plot No. 45, Street No.14 Marol MIDC Industry Estate, Andheri East,Mumbai-400093</div>
          </div>
          <div className="topInfo">
            <div className="title">Help & Info</div>
            <div className="subtitle">
              <div className="subtitleAbout">About Cafe</div>
              <div className="subtitleCareer">Careers</div>
              <div className="subtitleFaq">FAQs</div>
            </div>
          </div>
          <div className="topContact">
            <div className="title">Contact Us</div>
            <div className="subtitle">
              <div className="subtitleNumber">1809-908-5647</div>
              <div className="subtitleTouch">Get in Touch</div>
              <div className="subtitleCgat">Chat With Us</div>
            </div>
          </div>
          <div className="topLinks">
            <div className="title">Useful Links</div>
            <div className="subtitle">
              <div className="subtitlePrivacy">Privacy Policy</div>
              <div className="subtitleTerms">Get in Touch</div>
              <div className="subtitlePayment">Payment Issues</div>
              <div className="subtitleNet">Net Banking</div>
              <div className="subtitleCustom">Custom Order</div>
            </div>
          </div>
        </div>
        <div className="topBottom">
          <div className="bottomFollow">
            <div className="followText">Follow Us on :</div>
            <div className="followSymbol">
              <div className="symbolFacebook">
                <img width="20px" className="facebookImg" src="./assets/facebook.png" />
              </div>
              <div className="symbolInstagram">
                <img width="20px" className="instagramImg" src="./assets/instagram.png" />
              </div>
              <div className="symbolWhatsapp">
                <img width="20px" className="whatsappImg" src="./assets/whatsapp.png" />
              </div>
              <div className="symbolTwitter">
                <img width="20px" className="twitterImg" src="./assets/twitter.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBottom">@2023 Railworld India. All Rights Reserved</div>
    </div>
  </div>
  )
}

export default Footer;