import "./MenuNav.css";

// othercategories page import
import OtherCatergory from './OtherCatergory'
import Bestorf from './Bestofr'

// Assets Import

import hotbeverage from '../../../Assests/hotbeverage.jpeg'
import coldbeverage from '../../../Assests/coldbeverage.jpeg'
import specialdrinks from '../../../Assests/specialdrinks.jpeg'

import { FaPlus } from "react-icons/fa";

// import { Link } from "react-router-dom";

function MenuCategories() {
  return (
    <>
      <div className="sunsetBgHeader-color">
        <div className="sunsetBG-Header">
          <div className="sunsetHeader-text">
            <div
              style={{
                backgroundColor: "#D16E43",
                width: "150px",
                height: "1px",
                display: "inline-flex",
                margin: "10px 20px",
              }}
            >
              {" "}
            </div>
            <h2>S U N S E T</h2>
            <div
              style={{
                backgroundColor: "#D16E43",
                width: "150px",
                height: "1px",
                display: "inline-flex",
                margin: "10px 20px",
              }}
            >
              {" "}
            </div>
            <h1>CAFE</h1>
          </div>         
        </div>

        <div className="sunsetMenu-categoryWrapper">
            <div className="menuCategory-content">
                <div className="hotBeverage-content">
                    <div className="hotBeverageImg">
                        <img src={hotbeverage} alt="" />
                    </div>
                    
                    <h3>HOT BEVERAGES</h3>

                    <div className="hotBeverage-items">
                        <div className="item-header">
                            <h2>Espresso</h2>
                            <p>A single shot of concentrated <br />coffee</p>                            
                        </div>
                        <div className="itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 120</h5>
                        </div>                                               
                    </div>

                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                            {/* 2nd item */}

                    <div className="hotBeverage-items">
                        <div className="item-header">
                            <h2>Cappuccino</h2>
                            <p>Equal parts espresso steamed <br /> milk, and foam</p>                            
                        </div>
                        <div className="itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 250</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                        {/* 3rd item */}

                    <div className="hotBeverage-items">
                        <div className="item-header">
                            <h2>Americano</h2>
                            <p>Espresso shots with hot water</p>                            
                        </div>
                        <div className="itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 158</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>                   
                </div>

                {/* Cold Beverage column */}

                <div className="coldBeverage-content">
                    <div className="coldBeverageImg">
                        <img src={coldbeverage} alt="" />
                    </div>
                    
                    <h3>COLD BEVERAGES</h3>

                    <div className="coldBeverage-items">
                        <div className="cold-item-header">
                            <h2>Iced Coffee</h2>                            
                        </div>
                        <div className="cold-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 140</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                            {/* 2nd item */}

                    <div className="coldBeverage-items">
                        <div className="cold-item-header">
                            <h2>Iced Latte</h2>                           
                        </div>
                        <div className="cold-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 130</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                        {/* 3rd item */}

                    <div className="coldBeverage-items">
                        <div className="cold-item-header">
                            <h2>Frappuccino</h2>                           
                        </div>
                        <div className="cold-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 120</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                    {/* 4th item */}

                    <div className="coldBeverage-items">
                        <div className="cold-item-header">
                            <h2>Affogato</h2>                           
                        </div>
                        <div className="cold-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 110</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                    {/* 5th item */}

                    <div className="coldBeverage-items">
                        <div className="cold-item-header">
                            <h2>Ice Latte</h2>                           
                        </div>
                        <div className="cold-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 160</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px",}}></div>                   
                </div>
               


                {/* Special Drink column */}

                <div className="spDrink-Beverage-content">
                    <div className="spDrink-BeverageImg">
                        <img src={specialdrinks} alt="" />
                    </div>
                    
                    <h3>SPECIALTY DRINKS</h3>

                    <div className="spDrink-items">
                        <div className="spDrink-item-header">
                            <h2>Matcha Latte</h2>                            
                        </div>
                        <div className="spDrink-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 140</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                            {/* 2nd item */}

                    <div className="spDrink-items">
                        <div className="spDrink-item-header">
                            <h2>Iced Coffee</h2>                           
                        </div>
                        <div className="spDrink-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 160</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                        {/* 3rd item */}

                    <div className="spDrink-items">
                        <div className="spDrink-item-header">
                            <h2>Caramel  Tea</h2>                           
                        </div>
                        <div className="spDrink-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 160</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                    {/* 4th item */}

                    <div className="spDrink-items">
                        <div className="spDrink-item-header">
                            <h2>Green Tea</h2>                           
                        </div>
                        <div className="spDrink-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 120</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px"}}></div>

                    {/* 5th item */}

                    <div className="spDrink-items">
                        <div className="spDrink-item-header">
                            <h2>Herbal Infusions</h2>                           
                        </div>
                        <div className="spDrink-itemAdd-btn-itemcost">
                            <button><FaPlus /></button>
                            <h5>Rs. 120</h5>
                        </div>                                               
                    </div>
                    <br />
                    <div style={{backgroundColor: "#3C2D25", height: "2px",}}></div>                   
                </div>
            </div>

            <OtherCatergory />
            <Bestorf/>
        </div>
      </div>
    </>
  );
}
export default MenuCategories;
