import React, { useState } from 'react'
import './Blog1.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Blog1() {
  return (
    <div className='blog1'>
      <div className='blog1First'>
        <div className='firstMain'>
          <div className='mainTop'>#1 Exclusive</div>
          <div className='mainBottom'>Unlock a World of Culinary Luxury and Tranquil Moments &  Much More.</div>
          <hr />
        </div>
      </div>
      <div className='blog1Second'>
        <div className='blog1Second'>
          <div className='firstMain'>
            <div className='mainTop'>Newly Added</div>
            <div className='mainBottom'>
            <div className='bottomLeft'>
              <div className='leftTop'>Mango Tango Fusion Salad:</div>
              <div className='leftBottom'>
                <div className='bottomImage'>
                  <img className="imageSalad" src="./assets/blog1SaladImg.jpg" alt="blog1SaladImg.jpg" />
                </div>
                <div className='bottomText'>Dive into a refreshing symphony of flavors with our Mango Tango Fusion Salad. Crisp mixed greens, juicy mango slices, and cherry tomatoes are tossed with a zesty mango-lime dressing, creating a burst of tropical goodness on your palate. Topped with grilled chicken for a protein boost and garnished with crunchy almond slivers</div>
              </div>
            </div>
            <div className='bottomRight'>
              <div className='rightTop'>Spiced Infusion Sea Bass:</div>
              <div className='rightBottom'>
                <div className='bottomImage'>
                  <img className="imageInfusion" src="./assets/blog1InfusionImg.jpg" alt="blog1InfusionImg.jpg" />
                </div>
                <div className='bottomText'> Immerse yourself in the bold and aromatic notes of our Spiced Infusion Sea Bass. Fresh fillets of sea bass are delicately seasoned with a blend of Indian spices, including cumin, coriander, and turmeric, then seared to perfection. Served on a bed of saffron-infused basmati rice and accompanied by a side of mint-cilantro chutney, this dish is a celebration of coastal flavors with a touch of Indian flair.</div>
              </div>
            </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className='blog1Third'>
        <div className='thirdMain'>
          <div className='mainTop'>
            <div className='topTop'>Become a Sunset Insider: Join Our Exclusive Community</div>
            <div className='topBottom'>
              <div className='bottomList'>
                <li>Newsletter: Subscribe to our newsletter for sneak peeks, exclusive recipes, and members-only offers.</li>
                <li>Sunset Insider Club: Unlock premium benefits by becoming a part of our exclusive membership program.</li>
              </div>
              <div className='bottomNote'>Indulge in the Extraordinary. Reserve Your Seat for an Exclusive Culinary Soiree at Café Sunset.</div>
            </div>
          </div>
          <div className='mainBottom'>
            <div className='bottomTop'>Limited-Time Exclusive Events:</div>
            <div className='bottomBottom'>
              <li>Sunset Symphony Night: An evening of live music, exclusive dishes, and a curated selection of wines. Limited seats available. Reserve now.</li>
              <li>Chef's Table Experience: Join our head chef for an intimate dining experience featuring a specially crafted menu. Limited to a select few connoisseurs.</li>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className='blog1Fourth'>
        <div className='blog1Fourth'>
            <div className='firstMain'>
              <div className='mainTop'>WHERE WE’VE BEEN FEATURED</div>
              <div className='mainBottom'>
                <img className="bottomEventsImg" src="./assets/mainblog1Event1.jpeg" alt="blog1InfusionImg.jpg" />
                <img className="bottomEventsImg" src="./assets/mainblog1Event2.jpg" alt="blog1InfusionImg.jpg" />
                <img className="bottomEventsImg" src="./assets/mainblog1Event3.jpg" alt="blog1InfusionImg.jpg" />
                <img className="bottomEventsImg" src="./assets/mainblog1Event4.jpeg" alt="blog1InfusionImg.jpg" />
              </div>
              <hr />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Blog1
