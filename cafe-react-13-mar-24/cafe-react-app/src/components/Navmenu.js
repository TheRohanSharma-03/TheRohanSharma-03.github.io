import React from 'react'
import './Navmenu.css';
import { Link } from 'react-router-dom';

function Navmenu() {
  return (
    <div className='nav'>
      <div class="topLogo" id="topLogo">
        <img class="cafeLogo" src="./assets/cafeLogo.png" alt="cafeLogo.jpg" />
      </div>
      <div class="topMenu" id="topMenu">
        <ul class="menuAll" id="menuAll">
          <li><Link to="/">Home</Link></li>
          <li className='menuUnderline'><Link to="/menu">Menu</Link></li>
          <li><Link to="/contactUs">Contact Us</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </div>
      <div class="topAuth" id="topAuth">
          <img class="userLogo" src="./assets/userLogo.png" alt="userLogo.jpg" />
      </div>
      <div class="topCart" id="topCart">
        <div class="cartLogo" id="cartLogo">
          <img class="cartLogoLogo" src="./assets/cartLogo.png" alt="cartLogo.jpg" />
        </div>
        <div class="cartText" id="cartText">
          <p class="cartTextText">My Card</p>
        </div>
      </div>
    </div>
  );
}

export default Navmenu;