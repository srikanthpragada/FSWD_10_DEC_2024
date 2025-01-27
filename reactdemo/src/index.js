import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './routing/Main';
//import reportWebVitals from './reportWebVitals';

let catalog = [
   { title: 'iPhone 15 pro', price: 80000, disrate : 10 }, 
   { title: 'PowerBeats Pro', price: 30000, disrate : 15 },
   { title: 'Bose Headphones', price: 40000, disrate : 25 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
