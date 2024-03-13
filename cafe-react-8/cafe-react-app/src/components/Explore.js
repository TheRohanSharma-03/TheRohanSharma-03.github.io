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
                            <Link className='menu1ImageLink' to="/menu1"><img class="menu1Img" src="./assets/menu1Img.jfif" alt="menu1Img" /></Link>
                            
                        </div>
                        <div className="menu1Name"><Link className='menu1NameLink' to="/menu1">BURGER & SANDWICHES</Link></div>
                    </div>
                    <div className="menu2">
                        <div className="menu2Image">
                            <Link className='menu2ImageLink' to="/menu2"><img class="menu2Img" src="./assets/menu2Img.jfif" alt="menu2Img" /></Link>
                            
                        </div>
                        <div className="menu2Name"><Link className='menu2NameLink' to="/menu2">CHINESE CUSINE</Link></div>
                    </div>
                    <div className="menu3">
                        <div className="menu3Image">
                            <Link className='menu3ImageLink' to="/menu3"><img class="menu3Img" src="./assets/menu3Img.jfif" alt="menu3Img" /></Link>
                            
                        </div>
                        <div className="menu3Name"><Link className='menu3NameLink' to="/menu3">STARTERS</Link></div>
                    </div>
                    <div className="menu4">
                        <div className="menu4Image">
                            <Link className='menu4ImageLink' to="/menu4"><img class="menu4Img" src="./assets/menu4Img.jfif" alt="menu4Img" /></Link>
                            
                        </div>
                        <div className="menu4Name"><Link className='menu4NameLink' to="/menu4">SIDES</Link></div>
                    </div>
                    <div className="menu5">
                        <div className="menu5Image">
                            <Link className='menu5ImageLink' to="/menu5"><img class="menu5Img" src="./assets/menu5Img.jfif" alt="menu5Img" /></Link>
                            
                        </div>
                        <div className="menu5Name"><Link className='menu5NameLink' to="/menu5">SALADS</Link></div>
                    </div>
                    <div className="menu6">
                        <div className="menu6Image">
                            <Link className='menu6ImageLink' to="/menu6"><img class="menu6Img" src="./assets/menu6Img.jfif" alt="menu6Img" /></Link>
                            
                        </div>
                        <div className="menu6Name"><Link className='menu6NameLink' to="/menu6">DESSERTS / ICE-CREAM</Link></div>
                    </div>
                    <div className="menu7">
                        <div className="menu7Image">
                            <Link className='menu7ImageLink' to="/menu7"><img class="menu7Img" src="./assets/menu7Img.jfif" alt="menu7Img" /></Link>
                            
                        </div>
                        <div className="menu7Name"><Link className='menu7NameLink' to="/menu7">MAIN COURSE</Link></div>
                    </div>
                    <div className="menu8">
                        <div className="menu8Image">
                            <Link className='menu8ImageLink' to="/menu8"><img class="menu8Img" src="./assets/menu8Img.jfif" alt="menu8Img" /></Link>
                            
                        </div>
                        <div className="menu8Name"><Link className='menu8NameLink' to="/menu8">VALUE COMBO</Link></div>
                    </div>
                    <div className="mainMenu">
                        <div className="mainMenuImage">
                            <Link className='mainMenuImageLink' to="/menu"><img class="mainMenuImg" src="./assets/mainMenuImg.jfif" alt="mainMenuImg" /></Link>
                            
                        </div>
                        <div className="mainMenuName"><Link className='mainMenuNameLink' to="/menu">BEVERAGES</Link></div>
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