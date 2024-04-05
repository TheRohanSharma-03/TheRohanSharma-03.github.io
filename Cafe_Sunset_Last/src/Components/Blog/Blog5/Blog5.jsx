import "../Blog5/Blog5.css";

import pas from "../../../Assests/pas.jpg";

// import { Link } from "react-router-dom";

function Blog5() {
  return (
    <>
      <main>
        <div className="blog5-wrapper">
          <div className="bolg5Container">
            <div className="blog5-header">
              <h1>
                {" "}
                #5 Bites of Bliss: The Sweet <br /> Symphony of Pastries at Café{" "}
                <br /> Sunset
              </h1>
            </div>

            <div className="blog5Para">
              <p>
                Indulge your senses in a symphony of sweetness at Café Sunset,
                where every pastry is a delightful note in the grand composition
                of flavors. Join us on a journey through our delectable
                selection, where each bite is a moment of bliss crafted with
                precision and passion.
              </p>
            </div>

            <hr className="blog5hr" style={{ borderColor: "#D16E43", margin: "0 0 0 28rem " }} />

            <div className="blog5-3rdP">
              <img src={pas} alt="" />

              <p>
                Experience the burst of freshness with our berry-infused
                pastries. From luscious strawberry <br /> tarts to
                blueberry-filled delights, each bite is a celebration of
                nature's vibrant hues <br />
                and the sweet melody of ripe, juicy berries.
              </p>
            </div>

            <hr style={{ borderColor: "#D16E43", margin: "0 0 0 0" }} />

            <div className="blog5-3rdP">
              <h2>Pairing with Perfection: Your Ideal Culinary Duet</h2>

              <p>
                At Café Sunset, we understand that the perfect pastry deserves
                an equally perfect pairing. <br /> Whether it's a steaming cup
                of artisan coffee, a fragrant herbal tea, or a velvety latte,
                our baristas <br /> will guide you to the ideal culinary duet to
                enhance your pastry experience.
              </p>
            </div>

            <hr style={{ borderColor: "#D16E43", margin: "5rem 0 0 0" }} />

            <div className="blog5last-bitesblis-header">
              <h2>Bites of Bliss: Your Invitation to Indulgence</h2>
              <p>
                Café Sunset invites you to experience the sweet symphony of
                pastries—a crescendo of flavors, textures, and <br /> moments that
                elevate the simple act of biting into a blissful indulgence. <br />
                Join us for a pastry sojourn at Café Sunset, where every bite is
                a note in the melody of sweetness, and the art <br /> of pastry becomes
                a delightful journey into the heart of indulgence.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Blog5;
