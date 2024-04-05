// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navmenu from './components/Navmenu';
import Mainmenu from './components/Mainmenu';
import Explore from './components/Explore';
import Menu1 from "./components/menu/Menu1";
import Menu2 from "./components/menu/Menu2";
import Menu3 from "./components/menu/Menu3";
import Menu4 from "./components/menu/Menu4";
import Menu5 from "./components/menu/Menu5";
import Menu6 from "./components/menu/Menu6";
import Menu7 from "./components/menu/Menu7";
import Menu8 from "./components/menu/Menu8";
import Mainblog from './components/Mainblog';
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Blog3 from "./components/blog/Blog3";
import Blog4 from "./components/blog/Blog4";
import Blog5 from "./components/blog/Blog5";
import Blog6 from "./components/blog/Blog6";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Forgetpass from "./components/auth/Forgetpass";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Faq from "./components/Faq";
import Yourorder from "./components/account/Yourorder";
import Myaccount from "./components/account/Myaccount";
import Accountinfo from "./components/account/Accountinfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/menu" element={<><Navmenu /><Mainmenu /><Footer /></>} />
        <Route path="/explore" element={<><Navmenu /><Explore /><Footer /></>} />
        <Route path="/menu1" element={<><Navmenu /><Menu1 /><Footer /></>} />
        <Route path="/menu2" element={<><Navmenu /><Menu2 /><Footer /></>} />
        <Route path="/menu3" element={<><Navmenu /><Menu3 /><Footer /></>} />
        <Route path="/menu4" element={<><Navmenu /><Menu4 /><Footer /></>} />
        <Route path="/menu5" element={<><Navmenu /><Menu5 /><Footer /></>} />
        <Route path="/menu6" element={<><Navmenu /><Menu6 /><Footer /></>} />
        <Route path="/menu7" element={<><Navmenu /><Menu7 /><Footer /></>} />
        <Route path="/menu8" element={<><Navmenu /><Menu8 /><Footer /></>} />
        <Route path="/blogs" element={<><Navmenu /><Mainblog /><Footer /></>} />
        <Route path="/blog1" element={<><Navmenu /><Blog1 /><Footer /></>} />
        <Route path="/blog2" element={<><Navmenu /><Blog2 /><Footer /></>} />
        <Route path="/blog3" element={<><Navmenu /><Blog3 /><Footer /></>} />
        <Route path="/blog4" element={<><Navmenu /><Blog4 /><Footer /></>} />
        <Route path="/blog5" element={<><Navmenu /><Blog5 /><Footer /></>} />
        <Route path="/blog6" element={<><Navmenu /><Blog6 /><Footer /></>} />
        <Route path="/signup" element={<><Navmenu /><Signup /><Footer /></>} />
        <Route path="/login" element={<><Navmenu /><Login /><Footer /></>} />
        <Route path="/forgetpass" element={<><Navmenu /><Forgetpass /><Footer /></>} />
        <Route path="/aboutus" element={<><Navmenu /><Aboutus /><Footer /></>} />
        <Route path="/contactus" element={<><Navmenu /><Contactus /><Footer /></>} />
        <Route path="/faq" element={<><Navmenu /><Faq /><Footer /></>} />
        <Route path="/yourorder" element={<><Yourorder /><Footer /></>} />
        <Route path="/myaccount" element={<><Myaccount /><Footer /></>} />
        <Route path="/accountinfo" element={<><Accountinfo /><Footer /></>} />
      </Routes>
    </div>

  );
}

export default App;
