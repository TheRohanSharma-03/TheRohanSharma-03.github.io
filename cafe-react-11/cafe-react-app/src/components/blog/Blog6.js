import React, { useState } from 'react'
import './Blog6.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Blog6() {
  return (
    <div className='blog6'>
      <div className='blog6First'>
        <div className='firstMain'>
          <div className='mainTop'>#6 Flavorful Escapes: Exploring Café Sunset's Seasonal Specialties</div>
          <div className='mainBottom'>Embark on a culinary journey with Café Sunset as we unveil our Seasonal Specialties—a menu that mirrors the changing landscapes of nature. From the crisp notes of autumn to the vibrant hues of summer, each dish is a flavorful escape that captures the essence of the season.</div>
          <hr />
        </div>
      </div>
      <div className='blog6Second'>
        <div className='secondMain'>
          <div className='mainTop'>Monsoon Magic: Spices and Raindrops</div>
          <div className='mainBottom'>
            <div className='bottomLeft'>
              <img className="blog6Img1" src="./assets/blog6Img1.jpg" alt="blog1SaladImg.jpg" />
            </div>
            <div className='bottomRight'>
              <div className='rightTop'>Monsoon Magic: Spices and Raindrops</div>
              <div className='rightBottom'>Sip on the warmth of our Masala Chai Latte, where the aromatic blend of spices dances with the soothing embrace of tea. It's a cup that encapsulates the magic of monsoon rain and the cozy moments spent indoors.</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className='blog6Third'>
        <div className='thirdMain'>
          <div className='mainTop'>Autumn Spice Trail: A Harvest of Aromas</div>
          <div className='mainBottom'>
            <div className='bottomLeft'>
              <div className='leftTop'>🍁 Pumpkin Halwa: Autumnal Indulgence</div>
              <div className='leftBottom'>Savor the sweetness of autumn with our Pumpkin Halwa. The rich, caramelized pumpkin, adorned with nuts and spices, is a dessert that echoes the warmth of festive gatherings.</div>
            </div>
            <div className='bottomRight'>
              <img className="blog6Img2" src="./assets/blog6Img2.jpg" alt="blog1SaladImg.jpg" />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className='blog6Fourth'>
        <div className='fourthMain'>
          <div className='mainTop'>Culinary Escapes Await at Café Sunset</div>
          <div className='mainBottom'>
            <p>Embark on a flavorful journey through the seasons at Café Sunset, where our Seasonal Specialties bring the essence of India to your plate. Join us as we celebrate the ever-changing tapestry of flavors that mirrors the spirit of each season. Every dish is an invitation to savor the beauty of nature's culinary escapades, where spices, aromas, and seasonal delights intertwine in a dance of unparalleled gastronomic joy.</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Blog6
