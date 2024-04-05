import "./Style.css";
import "../Responsive/HomeTab.css"
import Caraosel from "./Caraosel";

function Welcom() {
  return (
    <>
      <div>
        <h2 class="welcomeText">Welcome</h2>
      </div>

      <div className="navbarContentWrapper">
        <div className="navbarContent-left">
          <h1 className="navbarContentHeader">
            Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite
            Unveils a Symphony of Flavors and Moments.
          </h1>
          <h2>Gateway to Serenity, Culinary Delights,</h2>
          <h3>
            Step into a World Where Ambiance. Plavor, and Warmth Converge-A
            Haven Where Every Visit Feels Like Coming Home.
          </h3>
          <button class="orderBtn">Order Now</button>
        </div>
        <Caraosel />
      </div>
      
    </>
  );
}
export default Welcom;
