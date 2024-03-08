import React from 'react'
import './Explore.css';
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <div className='explore'>
        <div className='exploreMain'>
            <div className='mainTop'>
            <img className="exploreTopImg" src="./assets/exploreTopImg.png" alt="exploreTopImg" />
            </div>
            <div className='mainBottom'>
                <div className='bottomTop'>
                    <div className='topBorderLeft'><hr className='leftHr'></hr></div>
                    <div className='topText'>WHAT’S ON YOUR MIND?</div>
                    <div className='topBorderRight'><hr className='rightHr'></hr></div>
                </div>
                <div className='bottomMid'>
                    <section className="layout">
                    <div className="menu1">
                        <div className="menu1Image">
                            <img class="menu1Img" src="./assets/menu1Img.jfif" alt="menu1Img" />
                        </div>
                        <div className="menu1Name">BURGER & SANDWICHES</div>
                    </div>
                    <div className="menu2">
                        <div className="menu2Image">
                            <img class="menu2Img" src="./assets/menu2Img.jfif" alt="menu2Img" />
                        </div>
                        <div className="menu2Name">CHINESE CUSINE</div>
                    </div>
                    <div className="menu3">
                        <div className="menu3Image">
                            <img class="menu3Img" src="./assets/menu3Img.jfif" alt="menu3Img" />
                        </div>
                        <div className="menu3Name">STARTERS</div>
                    </div>
                    <div className="menu4">
                        <div className="menu4Image">
                            <img class="menu4Img" src="./assets/menu4Img.jfif" alt="menu4Img" />
                        </div>
                        <div className="menu4Name">SIDES</div>
                    </div>
                    <div className="menu5">
                        <div className="menu5Image">
                            <img class="menu5Img" src="./assets/menu5Img.jfif" alt="menu5Img" />
                        </div>
                        <div className="menu5Name">SALADS</div>
                    </div>
                    <div className="menu6">
                        <div className="menu6Image">
                            <img class="menu6Img" src="./assets/menu6Img.jfif" alt="menu6Img" />
                        </div>
                        <div className="menu6Name">DESSERTS / ICE-CREAM</div>
                    </div>
                    <div className="menu7">
                        <div className="menu7Image">
                            <img class="menu7Img" src="./assets/menu7Img.jfif" alt="menu7Img" />
                        </div>
                        <div className="menu7Name">MAIN COURSE</div>
                    </div>
                    <div className="menu8">
                        <div className="menu8Image">
                            <img class="menu8Img" src="./assets/menu8Img.jfif" alt="menu8Img" />
                        </div>
                        <div className="menu8Name">VALUE COMBO</div>
                    </div>
                    <div className="mainMenu">
                        <div className="mainMenuImage">
                            <img class="mainMenuImg" src="./assets/mainMenuImg.jfif" alt="mainMenuImg" />
                        </div>
                        <div className="mainMenuName">BEVERAGES</div>
                    </div>
                    </section>
                </div>
                <div className='bottomBottom'>⮟ See More</div>
            </div>
        </div>
    </div>
  )
}

export default Explore