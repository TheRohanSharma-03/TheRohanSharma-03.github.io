import React, { useState } from 'react'
import './Blog4.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Blog4() {
  return (
    <div className='blog4'>


      <div className='blog4First'>
        <div className='firstMain'>
          <div className='mainTop'>#4 "Sipping Serenity: The Art of Sunset at Café Sunset</div>
          <div className='mainBottom'>As the sun gracefully descends, casting hues of amber and gold across the sky, Café Sunset emerges as a sanctuary where time slows, and the art of sipping becomes an ode to serenity. Join us on a poetic journey through the evening, where every cup holds the essence of twilight and the tranquil ambiance creates a canvas for moments to unfold.</div>
          <hr />
        </div>
      </div>



      <div className='blog4Second'>
        <div className='secondMain'>
          <div className='mainTop'>Sunset Brews: Crafting Tranquility in a Cup</div>
          <div className='mainBottom'>In the gentle glow of dusk, our Sunset Brews take center stage, each crafted to embody the essence of the setting sun. From the robust notes of Sunset Espresso to the soothing embrace of Sunset Chai, our beverages are more than drinks – they are elixirs that encapsulate the art of serenity. As you take that first sip, allow the flavors to transport you to a realm where time is a gentle river.</div>
          <hr />
        </div>
      </div>

      
      <div className='blog4Third'>
        <div className='thirdMain'>
          <div className='mainTop'>Sunset Conversations: Where Words Mingle Like Shadows</div>
          <div className='mainBottom'>At Café Sunset, conversations take on a poetic quality, where words mingle like shadows cast by the setting sun. Whether you're engrossed in a novel, catching up with friends, or lost in your own thoughts, the ambiance encourages a gentle flow of Sunset Conversations. It's a space where connections deepen, and the art of communication becomes as soothing as the fading daylight.</div>
          <hr />
        </div>
      </div>


      <div className='blog4Fourth'>
        <div className='fourthMain'>
          <div className='mainTop'>🌅 Café Sunset - Where Twilight Unfolds in Every Sip  🌅</div>
          <div className='mainBottom'>
            <p>For inquiries and reservations, contact us .</p>
            <p>Follow us on [Social Media Links] for the latest updates and exclusive offers.</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Blog4
