import React, { useState } from 'react'
import './Blog2.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Blog2() {
  return (
    <div className='blog2'>
      <div className='blog2First'>
        <div className='firstMain'>
          <div className='mainTop'>#2 "Café Sunset Chronicles: A Journey Through Flavors and Moments"</div>
          <div className='mainBottom'>Welcome to the vibrant tapestry of Café Sunset, where every cup tells a story, and every moment is a cherished chapter in our culinary odyssey. Join us as we embark on a captivating journey, unveiling the essence of Café Sunset through its diverse flavors and unforgettable moments</div>
          <hr />
        </div>
      </div>


      <div className='blog2Second'>
        <div className='secondMain'>
          <div className='mainLeft'>
            <div className='leftTop'>Morning Prelude: Awakening the Senses.</div>
            <div className='leftBottom'>As dawn breaks, Café Sunset comes alive with the Morning Prelude – a symphony of aromas and flavors that greet you with warmth and vitality. The Sunrise Espresso takes center stage, a robust elixir that awakens your senses, setting the stage for a day filled with culinary delights. Paired with a selection of freshly baked pastries, the morning at Café Sunset is a sweet beginning to your journey.</div>
          </div>
          <div className='mainRight'>
            <img className="blog2Img1" src="./assets/blog2Img1.jpg" alt="blog1SaladImg.jpg" />
          </div>
        </div>
      </div>


      <div className='blog2Third'>
        <div className='thirdMain'>
          <div className='mainLeft'>
            <div className='leftTop'>Culinary Odyssey: Seasons on a Plate</div>
            <div className='leftBottom'>The heart of Café Sunset lies in its culinary offerings, a true odyssey through the seasons. Our chefs curate a culinary symphony with seasonal specialties that capture the essence of each moment. From light and refreshing summer salads to hearty and comforting winter stews, each dish is a celebration of local flavors and innovation. Be sure to explore our daily specials.</div>
          </div>
          <div className='mainRight'>
            <img className="blog2Img1" src="./assets/blog2Img2.jpg" alt="blog1SaladImg.jpg" />
          </div>
        </div>
      </div>

      
      <div className='blog2Fourth'>
        <div className='fourthMain'>The sun may set, but the flavors linger, inviting you to return and continue your exploration of the rich tapestry of Café Sunset – a journey through flavors and moments that linger long after you've left our doors.</div>
      </div>
    </div>
  );
}

export default Blog2
