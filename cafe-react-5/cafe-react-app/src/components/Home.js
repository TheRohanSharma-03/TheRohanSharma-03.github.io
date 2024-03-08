import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    
    
    return(
        <div className="home" id="home">
            <div className="first" id="first">
                <img className="homeFirstImg" src="/assets/homeFirstImg.jpg" alt="homeFirstImg.jpg" />
                <div className="firstMain" id="firstMain">
            <div className="mainTop" id="mainTop">
                <div className="topLogo" id="topLogo">
                    <img className="cafeLogo" src="./assets/cafeLogo.png" alt="cafeLogo.jpg" />
                </div>
                <div className="topMenu" id="topMenu">
                    <ul className="menuAll" id="menuAll">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactUs">Contact Us</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="topAuth" id="topAuth">
                    <img className="userLogo" src="./assets/userLogo.png" alt="userLogo.jpg" />
                </div>
                <div className="topCart" id="topCart">
                    <div className="cartLogo" id="cartLogo">
                        <img className="cartLogoLogo" src="./assets/cartLogo.png" alt="cartLogo.jpg" />
                    </div>
                    <div className="cartText" id="cartText">
                        <p className="cartTextText">My Card</p>
                    </div>
                </div>
            </div>
            <div className="mainBottom" id="mainBottom">
                <div className="bottomLeft" id="bottomLeft">
                    <p className="leftText1">WELCOME</p>
                    <p className="leftText2">Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite Unveils a Symphony of Flavors and Moments.</p>
                    <p className="leftText3">Gateway to Serenity, Culinary Delights,</p>
                    <p className="leftText4">Step into a World Where Ambiance, Flavor, and Warmth Converge—A Haven Where Every Visit Feels Like Coming Home.</p>
                    <button className="leftButton">Order Now</button>
                </div>
                <div className="bottomRight" id="bottomRight">
                    <p className="rightText">We Are Known For :-</p>
                    <div className="rightCarousal">
                        <div className="wrapper">
                            <i id="left" class="fa-solid fa-angle-left">⮜</i>
                            <ul className="carousel">
                              <li className="card">
                                <div class="img"><img src="assets/chaiFusion.jpg" alt="img" draggable="false" /></div>
                                <h6>Chai Infusion Dessert: Cardamom Chai Panna Cotta</h6>
                                <span>Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize:"40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%"}}>&#10230;</span>
                                
                              </li>
                              <li className="card">
                                <div className="img"><img src="assets/tandoori.jpg" alt="img" draggable="false" /></div>
                                <h6>Sizzling Tandoori Platter: A Feast for the Senses</h6>
                                <span>Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize: "40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%" }}>&#10230;</span>
                              </li>
                              <li className="card">
                                <div className="img"><img src="assets/mangoCurry.jpg" alt="img" draggable="false" /></div>
                                <h6>Mango Curry Chicken</h6>
                                <span>Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize: "40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%" }}>&#10230;</span>
                              </li>
                              <li className="card">
                                <div className="img"><img src="assets/chaiFusion.jpg" alt="img" draggable="false" /></div>
                                <h6>Chai Infusion Dessert: Cardamom Chai Panna Cotta</h6>
                                <span>Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize: "40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%" }}>&#10230;</span>
                              </li>
                              <li className="card">
                                <div className="img"><img src="assets/tandoori.jpg" alt="img" draggable="false" /></div>
                                <h6>Sizzling Tandoori Platter: A Feast for the Senses</h6>
                                <span>Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize: "40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%" }}>&#10230;</span>
                              </li>
                              <li className="card">
                                <div className="img"><img src="assets/mangoCurry.jpg" alt="img" draggable="false" /></div>
                                <h6>Mango Curry Chicken</h6>
                                <span>Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.</span>
                                <a href="#" target="_self">Find out more </a>
                                <span style={{fontSize: "40px", color: "#D16E43", position: "absolute", top: "91%", left: "44%" }}>&#10230;</span>
                              </li>
                            </ul>
                            <i id="right" className="fa-solid fa-angle-right">⮞</i>
                          </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="second" id="second"> 
                <div className="secondMain" id="secondMain">
                    <div className="mainLeft" id="mainLeft">
                        <p className="leftText1">ABOUT US</p>
                        <p className="leftText2">The story behind sunset ...</p>
                        <p className="leftText3">Welcome to Sunset Café, where our journey began with Chef André's bold decision to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection.</p>
                        <p className="leftText4">Inspired by a chance encounter with a charming café bathed in the warm glow of twilight, Chef André envisioned a place where genuine hospitality and exceptional flavors intertwine. At Sunset Café, each dish is a reflection of Chef André's dedication to crafting culinary experiences that nourish both body and soul.</p>
                        <button className="leftButton">READ MORE</button>
                    </div>
                    <div className="mainRight" id="mainRight">
                        <div className="rightCircle" id="rightCircle">
                        </div>
                        <div className="rightImage" id="rightImage">
                            <img className="rightImageImg" src="./assets/chef.jpg" alt="userLogo.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="third" id="hird">
                <div className="thirdMain" id="thirdMain">
                    <div className="mainTop" id="mainTop">
                    <p className="topText">DEALS AND OFFERS</p>
                    </div>
                    <div className="mainBottom" id="mainBottom">
                    <div className="slider">
                        <div className="list">
                            <div className="item">
                                {/* <img src="img/1.jpg" alt=""> */}
                                <div className="itemLeft">
                                <div className="leftText1">FLAT</div>
                                <div className="leftText2">₹75 OFF</div>
                                <div className="leftText3">ON ORDER ABOVE ₹399</div>
                                <div className="leftText4">
                                    <div className="text4Left">Use Code </div>
                                    <div className="text4Right">FGU87</div>
                                </div>
                                </div>
                                <div className="itemRight">
                                <img className="rightImage" src="./assets/offersHome1.png" />
                                </div>
                            </div>
                            <div className="item">
                            {/* <img src="img/1.jpg" alt=""> */}
                            <div className="itemLeft">
                                <div className="leftText1">FLAT</div>
                                <div className="leftText2">₹100 OFF</div>
                                <div className="leftText3">ON ORDER ABOVE ₹599</div>
                                <div className="leftText4">
                                <div className="text4Left">Use Code </div>
                                <div className="text4Right">RTH23</div>
                                </div>
                            </div>
                            <div className="itemRight">
                                <img class="rightImage" src="./assets/offersHome2.png" />
                            </div>
                            </div>
                            <div className="item">
                            {/* <img src="img/1.jpg" alt=""> */}
                            <div className="itemLeft">
                                <div className="leftText1">FLAT</div>
                                <div className="leftText2">₹125 OFF</div>
                                <div className="leftText3">ON ORDER ABOVE ₹699</div>
                                <div className="leftText4">
                                <div className="text4Left">Use Code </div>
                                <div className="text4Right">KLY84</div>
                                </div>
                            </div>
                            <div className="itemRight">
                                <img className="rightImage" src="./assets/offersHome3.png" />
                            </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button id="prev">&lt;</button>
                            <button id="next">&gt;</button>
                        </div>
                        <ul className="dots">
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="fourth" id="fourth">
                <div className="fourthMain">
                    <div className="mainLeft">
                    <img className="leftImage" src="./assets/bookTable.jpg" />
                    </div>
                    <div className="mainRight">
                    <div className="rightTitle">Reservation</div>
                    <div className="rightSubtitle">BOOK A TABLE ONLINE</div>
                    <div className="rightForm">
                        <div className="formFirstRow">
                        <input placeholder="Your Name" className="formName"></input>
                        <input placeholder="Your Name" className="formEmail"></input>
                        </div>
                        <div className="formSecondRow">
                        <input placeholder="Date & Time" className="formDateTime"></input>
                        <input placeholder="No. of people" className="formNoOfPeople"></input>
                        </div>
                        <div className="formThirdRow">
                        <input placeholder="Special Request" className="formSpecialRequest"></input>
                        </div>
                        <div className="formFourthRow">
                        <div className="formButton">BOOK NOW</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="fifth" id="fifth">
                <img className="rightImage" src="./assets/morning.jpg" />
                <div className="fifthMain">
                    <div className="mainTop">
                    <div className="mainTitle">Motivation Being Our Hard Work</div>
                    <div className="slider">
                        <div className="list">
                            <div class="item">
                                <div class="mainQuote">
                                    <img class="quoteSign" src="./assets/quote.png" />
                                </div>
                                    <p>"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"</p>
                                </div>
                            <div class="item">
                                <div class="mainQuote">
                                    <img class="quoteSign" src="./assets/quote.png" />
                                </div>
                                <p>"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"</p>
                            </div>
                            <div class="item">
                                <div class="mainQuote">
                                    <img class="quoteSign" src="./assets/quote.png" />
                                </div>
                                <p>"I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <button id="prev">&lt;</button>
                            <button id="next">&gt;</button>
                        </div>
                        <ul className="dots">
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                    <div className="mainBottom">
                        <div className="bottomBox">
                            <div className="bottomFirst">Subscribe To Newsletter</div>
                            <div className="bottomSecond">and Get -20% off</div>
                            <div className="bottomThird">Your Gateway to Serenity, Culinary Delights, and Unforgettable Moments.</div>
                            <div className="bottomSubscribe">
                            <input placeholder="Enter email address..." className="email"></input>
                            <button className="subscribe">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="footer" id="footer"></div> */}
        </div>

    );

    
}

export default Home;