import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import React, { useState, useEffect } from 'react';





import SPLoader from './SpinnerLoader';







function App() {

  

  const tele = window.Telegram.WebApp;
  tele.isVerticalSwipesEnabled = false;


 const data = JSON.stringify({
  eventType: 'web_app_setup_closing_behavior',
  eventData: { is_visible: true },
 });
 
  const [theme, setTheme] = useState(() => {
    const mode = JSON.parse(localStorage.getItem('mode'));
    return mode|| "light"; 
  });
  const switchTheme = () => {
    setTheme((cur) => {
const newTheme = cur === "light" ? "dark" : "light";
  localStorage.setItem("mode", JSON.stringify(newTheme));
  return newTheme;
    });
  };
  console.log(theme, "theme");
  return (
   <div>
 <SPLoader />

</div>
  );
}


export default App;
