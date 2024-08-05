import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import React, { useState, useEffect } from 'react';





import SPLoader from './SpinnerLoader';







function App() {
  let tg = window.Telegram;
  
  if(tg != undefined){
    if (tg.WebApp != undefined && tg.WebApp.initData != undefined){
     
    let safe = tg.WebApp.initData;
    
    tg.WebApp.backgroundColor = '#3d3d3d';
    tg.WebApp.headerColor = '#212121';
    tg.WebApp.expand(); 

    }    
  }

  tg.WebApp.expand()
  window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
  window.scrollTo(0, 100);
  tg.WebApp.ready()

 



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
