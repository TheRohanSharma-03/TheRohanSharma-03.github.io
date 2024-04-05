import React, { useState } from 'react'
import './Mainblog.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Mainblog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const [rating1, setRating1]= React.useState(0);
  const [hover1, setHover1]= React.useState(0);
  const [rating2, setRating2]= React.useState(0);
  const [hover2, setHover2]= React.useState(0);
  const [rating3, setRating3]= React.useState(0);
  const [hover3, setHover3]= React.useState(0);
  const [rating4, setRating4]= React.useState(0);
  const [hover4, setHover4]= React.useState(0);
  return (
    <div className='mainblog'>
        <div className='blogFirst'>
          <img class="mainImg" src="./assets/mainblogFirst.jfif" alt="mainblogFirst.jfif" />
          <div className='firstMain'>
            <div className='mainLeft'>
              <div className='leftText'>SUNSET</div>
            </div>
            <div className='mainRight'>
              <div className='rightText'>
                <div className='textTop'>OUR VISION</div>
                <div className='textBottom'>To create a haven where every cup is a canvas, painting moments of serenity and connection against the backdrop of a setting sun.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='blogSecond'>
          <div className='secondMain'>
            <div className='mainTop'>LATEST BLOG POST</div>
            <div className='mainBottom'>
              <div className="slider-container">
                <Slider {...settings} className="slider-main">
                  <div className='slider-div' id='slider-div-1'>
                    <div className='left'>
                      <img class="mainblog1Second" src="./assets/mainblog1Second.jpg" alt="mainblogSecond.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Sip, Savor, socialize: The Three S's of Cafe Sunset.</div>
                        <div className="textBottom"><Link className='link' to="/blog1">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-2'>
                    <div className='left'>
                      <img class="mainblog2Second" src="./assets/mainblog2Second.jpg" alt="mainblog1Second.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Cafe sunset Chronicles: A Journey Through Flavours and Moments.</div>
                        <div className="textBottom"><Link className='link' to="/blog2">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-3'>
                    <div className='left'>
                      <img class="mainblog3Second" src="./assets/mainblog3Second.jpg" alt="mainblogSecond.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Sunset Sessions: Live Music, Lively Conversations at Sunset Cafe.</div>
                        <div className="textBottom"><Link className='link' to="/blog3">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-4'>
                    <div className='left'>
                      <img class="mainblog4Second" src="./assets/mainblog4Second.jpg" alt="mainblogSecond.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Sipping Serenity: The Art of Sunset at Cafe Sunset.</div>
                        <div className="textBottom"><Link className='link' to="/blog4">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-5'>
                    <div className='left'>
                      <img class="mainblog5Second" src="./assets/mainblog5Second.jpg" alt="mainblogSecond.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Bites of Bliss: The Sweet Symphony of Pastries at Cafe Sunset.</div>
                        <div className="textBottom"><Link className='link' to="/blog5">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-6'>
                    <div className='left'>
                      <img class="mainblog6Second" src="./assets/mainblog6Second.jpg" alt="mainblog6Second.jpg" />
                    </div>
                    <div className='right'>
                      <div className="rightText">
                        <div className="textTop">Flavorful Escapes: Exploring Cafe Sunset's Seasonal Specialities.</div>
                        <div className="textBottom"><Link className='link' to="/blog6">Find Out More.</Link></div>
                      </div>  
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className='blogThird'>
          <div className='thirdMain'>
            <div className='mainTop'>FEATURED REVIEW VIDEOS</div>
            <div className='mainBottom'>
              <div className="slider-container">
                <Slider {...settings2} className='slider-main'>
                  <div className='slider-div' id='slider-div-1'>
                    <div className='div-1-inner'>
                      <div className='top'>
                        <img class="mainblog1Third" src="./assets/mainblog1Third.jpg" alt="mainblog1Third.jpg" />
                      </div>
                      <div className='mid'>{/* star-rating */}
                        {[...Array(5)].map((star, index) => {
                          index+=1;
                          return(
                            <button
                              type='button'
                              key={index}
                              className={index <= (hover1 || rating1) ? "on" : "off"}
                              onClick={() => setRating1(index)}
                              onMouseDown={() => setHover1(index)}
                              >
                                <span className='star'>&#9733;</span>
                            </button>
                          )
                        })}
                      </div>
                      <div className='bottom'>
                        <div className='bottomInner'>Café Sunset is a hidden gem! The flavors are absolutely exquisite, and the cozy atmosphere makes it the perfect spot for a quiet coffee or a lively gathering. The Sunset Chai is a must-try! Can't wait to visit again." - Divya Soni.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-2'>
                    <div className='div-2-inner'>
                      <div className='top'>
                        <img class="mainblog2Third" src="./assets/mainblog2Third.jpg" alt="mainblog2Third.jpg" />
                      </div>
                      <div className='mid'>{/* star-rating */}
                        {[...Array(5)].map((star, index) => {
                          index+=1;
                          return(
                            <button
                              type='button'
                              key={index}
                              className={index <= (hover2 || rating2) ? "on" : "off"}
                              onClick={() => setRating2(index)}
                              onMouseDown={() => setHover2(index)}
                              >
                                <span className='star'>&#9733;</span>
                            </button>
                          )
                        })}
                      </div>
                      <div className='bottom'>
                        <div className='bottomInner'>The staff at Café Sunset goes above and beyond to make you feel at home. The artistic vibes, from the décor to the live performances, create a unique and memorable experience. Highly recommended! - Sanowar Khatun.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-3'>
                    <div className='div-3-inner'>
                      <div className='top'>
                        <img class="mainblog3Third" src="./assets/mainblog3Third.jpg" alt="mainblog3Third.jpg" />
                      </div>
                      <div className='mid'>{/* star-rating */}
                        {[...Array(5)].map((star, index) => {
                          index+=1;
                          return(
                            <button
                              type='button'
                              key={index}
                              className={index <= (hover3 || rating3) ? "on" : "off"}
                              onClick={() => setRating3(index)}
                              onMouseDown={() => setHover3(index)}
                              >
                                <span className='star'>&#9733;</span>
                            </button>
                          )
                        })}
                      </div>
                      <div className='bottom'>
                        <div className='bottomInner'>Its Was Very Delicious.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slider-div' id='slider-div-4'>
                    <div className='div-4-inner'>
                      <div className='top'>
                        <img class="mainblog4Third" src="./assets/mainblog4Third.jpg" alt="mainblog4Third.jpg" />
                      </div>
                      <div className='mid'>{/* star-rating */}
                        {[...Array(5)].map((star, index) => {
                          index+=1;
                          return(
                            <button
                              type='button'
                              key={index}
                              className={index <= (hover4 || rating4) ? "on" : "off"}
                              onClick={() => setRating4(index)}
                              onMouseDown={() => setHover4(index)}
                              >
                                <span className='star'>&#9733;</span>
                            </button>
                          )
                        })}
                      </div>
                      <div className='bottom'>
                        <div className='bottomInner'>The simplicity of the dishes lets the quality of the noodles shine through. A must-visit for any noodle lover!" - Ayusha.
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className='blogFourth'>
          <div className='fourthMain'>
            <div className='first'>Share Your Experience !</div>
            <div className='second'>Have you recently visited Café Sunset? We'd love to hear about your experience!</div>
            <div className='third'>Send your reviews and feedback and who knows – your review might be featured here next!</div>
            <div className='fourth'>
              <div className='fourthInner'>
              <div className='giveReview'>
                <input type="text" name="myInput" placeholder='Leave You Review Here....' />
              </div>
              <div className='submit'>
                <input type="submit" name='SUBMIT' />
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Mainblog