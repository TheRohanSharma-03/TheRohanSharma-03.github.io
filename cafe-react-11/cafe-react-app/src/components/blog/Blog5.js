import React, { useState } from 'react'
import './Blog5.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
 
function Blog5() {
  return (
    <div className='blog5'>
      <div className='blog5First'>
        <div className='firstMain'>
          <div className='mainTop'>#5 Bites of Bliss: The Sweet Symphony of Pastries at Café Sunset</div>
          <div className='mainBottom'>Indulge your senses in a symphony of sweetness at Café Sunset, where every pastry is a delightful note in the grand composition of flavors. Join us on a journey through our delectable selection, where each bite is a moment of bliss crafted with precision and passion.</div>
          <hr />
        </div>
      </div>
      <div className='blog5Second'>
        <div className='secondMain'>
          <div className='mainTop'>
          <img className="blog5Img1" src="./assets/blog5Img1.jpg" alt="blog1SaladImg.jpg" />
          </div>
          <div className='mainBottom'>Experience the burst of freshness with our berry-infused pastries. From luscious strawberry tarts to blueberry-filled delights, each bite is a celebration of nature's vibrant hues and the sweet melody of ripe, juicy berries.</div>
          <hr />
        </div>
      </div>
      <div className='blog5Third'>
        <div className='thirdMain'>
          <div className='mainTop'>Pairing with Perfection: Your Ideal Culinary Duet</div>
          <div className='mainBottom'>At Café Sunset, we understand that the perfect pastry deserves an equally perfect pairing. Whether it's a steaming cup of artisan coffee, a fragrant herbal tea, or a velvety latte, our baristas will guide you to the ideal culinary duet to enhance your pastry experience.</div>
          <hr />
        </div>
      </div>
      <div className='blog5Fourth'>
        <div className='fourthMain'>
          <div className='mainTop'>Bites of Bliss: Your Invitation to Indulgence</div>
          <div className='mainBottom'>
            <p>Café Sunset invites you to experience the sweet symphony of pastries—a crescendo of flavors, textures, and moments that elevate the simple act of biting into a blissful indulgence.</p>
            <p>Join us for a pastry sojourn at Café Sunset, where every bite is a note in the melody of sweetness, and the art of pastry becomes a delightful journey into the heart of indulgence.</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Blog5
