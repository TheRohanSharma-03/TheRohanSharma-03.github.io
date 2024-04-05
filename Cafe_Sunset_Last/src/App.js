import Navbar from './Components/Home/Navbar';
import About from './Components/Home/About'
import DealsSection from './Components/Home/DealsSection';
import Reservation from './Components/Home/Reservation';
import MotivationCaraosel from './Components/Home/MotivationCaraosel';
import Footer from './Components/Home/Footer';

import MenuNav from './Components/Menu/MainMenu/MenuNav';
import MenuCategories from './Components/Menu/MainMenu/MenuCategories';

import WhatsonMind from './Components/Menu/Menu-WhatsonMind/WhatsonMind'

import Menu1 from './Components/Menu/Menu1/Menu1'
import ChineseMenu2 from './Components/Menu/Menu2/ChineseMenu2'
import StarterMenu3 from './Components/Menu/Menu3/StarterMenu3'
import SidesMenu4 from './Components/Menu/Menu4/SidesMenu4'
import SaladMenu5 from './Components/Menu/Menu5/SaladMenu5'
import DesertsMenu6 from './Components/Menu/Menu6/DessertsMenu6'
import MaincomboMenu7 from './Components/Menu/Menu7/MaincomboMenu7'
import ComboMenu8 from './Components/Menu/Menu8/ComboMenu8'


import CartNav from './Components/Mycart/CartNav'

import AccountNav from './Components/Accounts/AccountNav'
import AcInfoNav from './Components/AccountInfo/AcInfoNav';

import OrderNav from './Components/OrderHistory/OrderNav'

import FAQNav from './Components/FAQ/FAQNav'
import FAQ from './Components/FAQ/FAQ'

import Contact from './Components/Contact/Contact'

import Aboutus from './Components/About/Aboutus'
import About2 from './Components/About/About2'
import About3 from './Components/About/About3'

import Registration from './Components/Registration/Registration'

import Login from './Components/Login/Login'

import Forgot from './Components/ForgotPage/Forgot'

import BlogNav from './Components/Blog/BlogNav'
import Blog1 from './Components/Blog/Blog1'

import Blog1st from './Components/Blog/Blog1/Blog1st'
import Blog2 from './Components/Blog/Blog2/Blog2'
import Blog3 from './Components/Blog/Blog3/Blog3'
import Blog4 from './Components/Blog/Blog4/Blog4'
import Blog5 from './Components/Blog/Blog5/Blog5'
import Blog6 from './Components/Blog/Blog6/Blog6'



import {Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <About/>
      <DealsSection/>
      <Reservation/>
      <MotivationCaraosel/>
      <Footer/>
      */}

      <Routes>
        <Route path="/" element={<><Navbar /> <About/> <DealsSection/> <Reservation/> <MotivationCaraosel/> <Footer/>  </>} />
        <Route path="/menu" element={<><MenuNav /> <MenuCategories/> <Footer/>  </>} />
        <Route path="/whatsonMind" element={<> <MenuNav /> <WhatsonMind/>  <Footer/>  </>} />
        <Route path="/menu1" element={<> <MenuNav /> <Menu1/>  <Footer/>  </>} />
        <Route path="/menu2" element={<> <MenuNav /> <ChineseMenu2/>  <Footer/>  </>} />
        <Route path="/menu3" element={<> <MenuNav /> <StarterMenu3/>  <Footer/>  </>} />
        <Route path="/menu4" element={<> <MenuNav /> <SidesMenu4/>  <Footer/>  </>} />
        <Route path="/menu5" element={<> <MenuNav /> <SaladMenu5/>  <Footer/>  </>} />
        <Route path="/menu6" element={<> <MenuNav /> <DesertsMenu6/>  <Footer/>  </>} />
        <Route path="/menu7" element={<> <MenuNav /> <MaincomboMenu7/>  <Footer/>  </>} />
        <Route path="/menu8" element={<> <MenuNav /> <ComboMenu8/>  <Footer/>  </>} />
        <Route path="/mycart" element={<> <CartNav />   <Footer/>  </>} />
        <Route path="/account" element={<> <AccountNav />  <Footer/>  </>} />
        <Route path="/acountInfo" element={<> <AcInfoNav />    <Footer/>  </>} />
        <Route path="/ordrhstry" element={<> <OrderNav />    <Footer/>  </>} />
        <Route path="/FAQ" element={<> <FAQNav /> <FAQ/>   <Footer/>  </>} />
        <Route path="/contact" element={<> <FAQNav /> <Contact/>   <Footer/>  </>} />
        <Route path="/About" element={<> <FAQNav /> <Aboutus/> <About2/> <About3/>   <Footer/>  </>} />
        <Route path="//signin" element={<> <MenuNav /> <Registration/>   <Footer/>  </>} />
        <Route path="//Login" element={<> <MenuNav /> <Login/>   <Footer/>  </>} />
        <Route path="//Forgot Password" element={<> <MenuNav /> <Forgot/>   <Footer/>  </>} />
        <Route path="//blog" element={<> <BlogNav /> <Blog1/>   <Footer/>  </>} />
        <Route path="//blog" element={<> <BlogNav /> <Blog1/>   <Footer/>  </>} />
        <Route path="//blog1" element={<> <BlogNav /> <Blog1st/>   <Footer/>  </>} />
        <Route path="//blog2" element={<> <BlogNav /> <Blog2/>   <Footer/>  </>} />
        <Route path="//blog3" element={<> <BlogNav /> <Blog3/>   <Footer/>  </>} />
        <Route path="//blog4" element={<> <BlogNav /> <Blog4/>   <Footer/>  </>} />
        <Route path="//blog5" element={<> <BlogNav /> <Blog5/>   <Footer/>  </>} />
        <Route path="//blog6" element={<> <BlogNav /> <Blog6/>   <Footer/>  </>} />

        
      </Routes>
      
    </div>
  );
}

export default App;
