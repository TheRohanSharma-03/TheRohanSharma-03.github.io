import "../Blog3/Blog3.css";

import sing from "../../../Assests/sing.jpg";
import comedyPodcaste from "../../../Assests/comedyPodcaste.png";

import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// import { Link } from "react-router-dom";

function Blog3() {
  return (
    <>
      <main>
        <div className="Blog3Main">
          <div className="blog3Container">
            <div className="Blog3Headr">
              <h1>
                #3 Sunset Sessions: Live Music, <br /> Lively Conversations at
                Café <br /> Sunset
              </h1>
            </div>

            <div className="Blog3Para">
              <p>
                Step into the magical realm of Café Sunset, where the Sunset
                Sessions unfold – an enchanting fusion of live music and lively
                conversations that elevates your dining experience to new
                heights. In this blog, we invite you to explore the rhythmic
                heartbeat of our café, where melodies mingle with flavors,
                creating an ambiance that resonates long after the last note
                fades away.
              </p>
            </div>

            <hr style={{ borderColor: "#D16E43", margin: "0 0 0 28rem " }} />

            <div className="LiveMusice-wrapper">
              <div className="LiveMusic-img">
                <img src={sing} alt="" />
              </div>

              <div className="liveMusic-para">
                <h3>
                  Harmony in the Air: <br /> Live Music Serenades.
                </h3>
                <p>
                  As the sun begins its descent, Café Sunset <br /> transforms
                  into a stage for Harmony in the Air. Our <br />
                  Sunset Sessions feature talented local musicians, <br />
                  whose soulful tunes set the perfect backdrop for an <br />{" "}
                  evening of relaxation and connection. From acoustic <br />{" "}
                  melodies to vibrant rhythms, each performance is a <br />{" "}
                  curated experience designed to enhance your <br /> dining
                  pleasure.
                </p>
              </div>

              {/* for Mob view */}

              <div className="mobViewLiveMusic-img-wrapper">
                <div className="mobViewLiveMusic-img">
                  <h3>
                    Harmony in the Air: Live Music Serenades.
                  </h3>
                  <img src={sing} alt="" />

                </div>
                

                <div className="mobblog3-para">
                  <p>As the sun begins its descent, Café Sunset transforms
                  into a stage for Harmony in the Air. Our 
                  Sunset Sessions feature talented local musicians, 
                  whose soulful tunes set the perfect backdrop for an 
                  evening of relaxation and connection. From acoustic 
                  melodies to vibrant rhythms, each performance is a 
                  curated experience designed to enhance your dining
                  pleasure.</p>

                </div>
              </div>


            </div>

            <hr style={{ borderColor: "#D16E43", margin: "2rem 0 0 0" }} />

            <div className="Podcaste-wrapper">
              <div className="podcaste-para">
                <h3>
                  Lively Conversations: Where Words Dance <br /> Like Notes &
                  The Comedy Crescendo: Live <br /> Standup Performances.
                </h3>
                <p>
                  Beyond the music, Café Sunset is a haven for Lively <br />
                  Conversations. Engage in meaningful dialogue with friends,{" "}
                  <br /> family, or fellow patrons as you share the experience
                  of live <br /> music. The ambiance encourages connection,
                  turning each <br /> table into a stage for the lively exchange
                  of ideas and <br /> laughter. Café Sunset becomes a space
                  where words dance <br />
                  like notes, creating an atmosphere of camaraderie.
                </p>
              </div>

              <div className="podcaste-img">
                <img src={comedyPodcaste} alt="" />
              </div>

              {/* for Mob view */}

              <div className="mobViewLiveMusic-img-wrapper">
                <div className="mobViewLiveMusic-img">
                  <img src={comedyPodcaste} alt="" />
                  <h3>
                  Lively Conversations: Where Words Dance Like Notes &
                  The Comedy Crescendo: Live Standup Performances.
                  </h3>
                </div>
                

                <div className="mobblog3-para">
                  <p>Beyond the music, Café Sunset is a haven for Lively 
                  Conversations. Engage in meaningful dialogue with friends,{" "}
                   family, or fellow patrons as you share the experience
                  of live  music. The ambiance encourages connection,
                  turning each  table into a stage for the lively exchange
                  of ideas and laughter. Café Sunset becomes a space
                  where words dance
                  like notes, creating an atmosphere of camaraderie.</p>

                </div>
              </div>
            </div>

            <hr style={{ borderColor: "#D16E43", margin: "2rem 0 0 0" }} />

            <div className="blog3lastrow">
              <h3>Encore Awaits: Return for <br /> More Laughter and Fun</h3>

              <h2>Want to Perform for Us? Join <br /> the Sunset Stage!</h2>

              <div className="blog3LasthedingPara">
                <h6>How to Reach Us</h6>
                <p>To express your interest in performing at Café Sunset, simply <br />send an email to [sunsetperformance@gmail.com] with the <br /> following details:</p>
                <li>Your name and a brief introduction</li>
                <li>Type of performance (musician, comedian, or other)</li>
                <li>Samples of your work (links, attachments, or portfolio)</li>
                <li>Preferred dates and times for performance</li>
                <p>Our team will get back to you promptly to discuss potential <br /> opportunities and coordinate your performance on the Sunset <br /> Stage. We look forward to turning your talent into an integral <br />part of the Café Sunset experience!</p>
              </div>

              {/* for Mobile view */}

              
              <Popup trigger={<button className="popupBtn">How to Reach Us</button>}>
                <div className="mobileviewPopup">
                  <p>To express your interest in performing at Café Sunset, simply send an email to [sunsetperformance@gmail.com] with the following details:</p>
                    <li>Your name and a brief introduction</li>
                    <li>Type of performance (musician, comedian, or other)</li>
                    <li>Samples of your work (links, attachments, or portfolio)</li>
                    <li>Preferred dates and times for performance</li>
                  <p>Our team will get back to you promptly to discuss potential opportunities and coordinate your performance on the Sunset  Stage. We look forward to turning your talent into an integral part of the Café Sunset experience!</p>
                </div>


              </Popup>



              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Blog3;
