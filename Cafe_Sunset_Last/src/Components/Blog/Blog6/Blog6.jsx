import "../Blog6/Blog6.css";

import chai from "../../../Assests/chai.jpg";
import pumpkin from "../../../Assests/pumpkin.jpg";

// import { Link } from "react-router-dom";

function Blog6() {
  return (
    <>
      <main>
        <div className="blog6mainBg">
          <div className="blog6container">
            <div className="blog6Header">
              <h1>
                {" "}
                #6 Flavorful Escapes: Exploring <br /> Café Sunset's Seasonal{" "}
                <br /> Specialties
              </h1>
            </div>

            <div className="blog6para">
              <p>
                Embark on a culinary journey with Café Sunset as we unveil our
                Seasonal Specialties—a menu that mirrors the changing landscapes
                of nature. From the crisp notes of autumn to the vibrant hues of
                summer, each dish is a flavorful escape that captures the
                essence of the season.
              </p>
            </div>

            <hr className="blog6hr" style={{ borderColor: "#D16E43", margin: "0 0 0 28rem " }} />

            <div className="blog6Mov-para">
              <h3>Monsoon Magic: Spices and Raindrops</h3>
              <p>In the gentle glow of dusk, our Sunset Brews take center stage, each crafted to embody the essence of the setting sun. From the robust notes of Sunset Espresso to the soothing embrace of Sunset Chai, our beverages are more than drinks – they are elixirs that encapsulate the art of serenity. As you take that first sip, allow the flavors to transport you to a realm where time is a gentle river.</p>

            </div>

            <hr className="blog6hr2" style={{ borderColor: "#D16E43", margin: "0 0 0 28rem " }} />

            <div className="mansonMagic-wraper">
              <h2>Monsoon Magic: Spices and Raindrops</h2>

              <div className="mansonMagic-container">
                <img src={chai} alt="" />

                <div className="maslaMagic-header">
                  <h4>🌧️ Masala Chai Latte: Monsoon in a Cup</h4>
                  <p>
                    Sip on the warmth of our Masala Chai Latte, where <br /> the
                    aromatic blend of spices dances with the <br /> soothing
                    embrace of tea. It's a cup that encapsulates <br /> the
                    magic of monsoon rain and the cozy moments <br /> spent
                    indoors.
                  </p>
                </div>
              </div>

              {/* for Mob View */}

              <div className="mobMasalachai-wrapper">
                <h3>Sunset Conversations: Where Words Mingle Like Shadows</h3>

                <div className="mobMalasamagic-flex">
                  <img src={chai} alt="" />
                  <h4>🌧️ Masala Chai Latte: Monsoon in a Cup</h4>
                </div>

                <p>Sip on the warmth of our Masala Chai Latte, where the aromatic blend of spices dances with the soothing embrace of tea. It's a cup that encapsulates the magic of monsoon rain and the cozy moments spent indoors.</p>

              </div>

              <hr className="blog6mobilevieHr" style={{ borderColor: "#D16E43" }} />

              <div className="mobMasalachai-wrapper">
                <h3>Autumn Spice Trail: A Harvest of Aromas</h3>

                <div className="mobMalasamagic-flex">
                  
                  <h4>🍁 Pumpkin Halwa: Autumnal Indulgence</h4>
                  <img src={pumpkin} alt="" />
                </div>

                <p>Savor the sweetness of autumn with our Pumpkin Halwa. The rich, caramelized pumpkin, adorned with nuts and spices, is a dessert that echoes the warmth of festive gatherings.</p>

              </div>
            </div>

            <hr className="blog6pumpkinhr" style={{ borderColor: "#D16E43" }} />

            <div className="mansonMagic-wraper">
              <h2>Autumn Spice Trail: A Harvest of Aromas</h2>

              <div className="mansonMagic-container">
                <div className="maslaMagic-header">
                  <h4>🍁 Pumpkin Halwa: Autumnal Indulgence</h4>
                  <p>
                    Savor the sweetness of autumn with our Pumpkin <br /> Halwa.
                    The rich, caramelized pumpkin, adorned <br /> with nuts and
                    spices, is a dessert that echoes the <br /> warmth of
                    festive gatherings.
                  </p>
                </div>

                <img src={pumpkin} alt="" />
              </div>
            </div>

            <hr className="blog6mosonhr" style={{ borderColor: "#D16E43" }} />

            <div className="blog6Last-para">
              <h3>Culinary Escapes Await at Café Sunset</h3>
              <p>
                Embark on a flavorful journey through the seasons at Café
                Sunset, where our Seasonal Specialties bring the <br /> essence of
                India to your plate. Join us as we celebrate the  ever-changing
                tapestry of flavors that mirrors the <br /> spirit of each season.
                Every dish is an invitation to savor the beauty of nature's
                culinary escapades, where <br /> spices, aromas, and seasonal delights
                intertwine in a dance of unparalleled gastronomic joy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Blog6;
