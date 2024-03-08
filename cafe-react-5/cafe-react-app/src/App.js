// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navmenu from './components/Navmenu';
import Mainmenu from './components/Mainmenu';
import Explore from'./components/Explore';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/menu" element={<><Navmenu /><Mainmenu /><Footer /></>} />
        <Route path="/explore" element={<><Navmenu /><Explore /><Footer /></>} />
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
