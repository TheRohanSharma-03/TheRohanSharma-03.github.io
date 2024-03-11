// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navmenu from './components/Navmenu';
import Mainmenu from './components/Mainmenu';
import Explore from'./components/Explore';
import Menu1 from "./components/menu/Menu1";
import Menu2 from "./components/menu/Menu2";
import Menu3 from "./components/menu/Menu3";
import Menu4 from "./components/menu/Menu4";
import Menu5 from "./components/menu/Menu5";
import Menu6 from "./components/menu/Menu6";
import Menu7 from "./components/menu/Menu7";
import Menu8 from "./components/menu/Menu8";
import {Route, Routes} from "react-router-dom";

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
      </Routes>
    </div>


    // <div className="App">
    //   <p style={{color: 'blue'}} className='heading'>hello</p>
    //   <p style={{fontSize: '4rem'}}>{new Date().toLocaleTimeString()}</p>
    //   <div>
    //     <h1>Rohan Sharma</h1>
    //     <p>Hello World</p>
    //   </div>
    // </div>
  );
}

export default App;
