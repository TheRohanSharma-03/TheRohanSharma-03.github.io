import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );


// continuous automatic time change function
// function myClock(){
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//   setTimeout(myClock, 1000)
// }
// myClock();


// props
// function Welcome(props){
//   return <h1>hii, {props.name}</h1>;
// }
// function Card(abc){
//   return <h2>hii, {abc.game}</h2>;
// }
// function Full({name, surname}){
//   return(
//     <>
//     <h2>hii, {name}</h2>
//     <h2>hii, {surname}</h2>;
//     </>
//   );
// }
// function Car({name, ...props}){
//   return(
//     <>
//     <h2>hii, {name}</h2>
//     <h2>hii, {props.version}</h2>;
//     </>
//   );
// }
// const myGame= "mario";
// root.render(
//   <>
//   <Welcome name="anuj kumar" />
//   <Card game={myGame} />
//   <Full name="vivek" surname="mehta" />
//   <Car name="ferrari" version="one" />
//   </>
// );