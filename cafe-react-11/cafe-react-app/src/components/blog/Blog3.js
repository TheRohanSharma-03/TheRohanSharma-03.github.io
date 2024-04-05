import React, { useState } from 'react'
import './Blog3.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Blog3() {
  return (
    <div className='blog3'>

      
      <div className='blog3First'>
        <div className='firstMain'>
          <div className='mainTop'>#3 Sunset Sessions: Live Music, Lively Conversations at Café Sunset</div>
          <div className='mainBottom'>Step into the magical realm of Café Sunset, where the Sunset Sessions unfold – an enchanting fusion of live music and lively conversations that elevates your dining experience to new heights. In this blog, we invite you to explore the rhythmic heartbeat of our café, where melodies mingle with flavors, creating an ambiance that resonates long after the last note fades away.</div>
          <hr />
        </div>
      </div>


      <div className='blog3Second'>
        <div className='secondMain'>
          <div className='mainLeft'>
            <div className='leftTop'>Harmony in the Air: Live Music Serenades.</div>
            <div className='leftBottom'>As the sun begins its descent, Café Sunset transforms into a stage for Harmony in the Air. Our Sunset Sessions feature talented local musicians, whose soulful tunes set the perfect backdrop for an evening of relaxation and connection. From acoustic melodies to vibrant rhythms, each performance is a curated experience designed to enhance your dining pleasure.</div>
          </div>
          <div className='mainRight'>
            <img className="blog3Img1" src="./assets/blog3Img1.jpeg" alt="blog1SaladImg.jpg" />
          </div>
        </div>
      </div>


      <div className='blog3Third'>
        <div className='thirdMain'>
          <div className='mainLeft'>
            <div className='leftTop'>Lively Conversations: Where Words Dance Like Notes & The Comedy Crescendo: Live Standup Performances.</div>
            <div className='leftBottom'>Beyond the music, Café Sunset is a haven for Lively Conversations. Engage in meaningful dialogue with friends, family, or fellow patrons as you share the experience of live music. The ambiance encourages connection, turning each table into a stage for the lively exchange of ideas and laughter. Café Sunset becomes a space where words dance like notes, creating an atmosphere of camaraderie.</div>
          </div>
          <div className='mainRight'>
            <img className="blog3Img2" src="./assets/blog3Img2.png" alt="blog1SaladImg.jpg" />
          </div>
        </div>
      </div>


      
      <div className='blog3Fourth'>
        <div className='fourthMain'>
          <div className='mainLeft'>Encore Awaits: Return for More Laughter and Fun</div>
          <div className='mainMid'>Want to Perform for Us? Join the Sunset Stage!</div>
          <div className='mainRight'>
            <p>How to Reach Us</p>
            <p>To express your interest in performing at Café Sunset, simply send an email to [sunsetperformance@gmail.com] with the following details:</p>
            <li>Your name and a brief introduction</li>
            <li>Type of performance (musician, comedian, or other)</li>
            <li>Samples of your work (links, attachments, or portfolio)</li>
            <li>Preferred dates and times for performance</li>
            <p>Our team will get back to you promptly to discuss potential opportunities and coordinate your performance on the Sunset Stage. We look forward to turning your talent into an integral part of the Café Sunset experience!</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Blog3
