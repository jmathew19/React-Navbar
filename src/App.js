import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Quotes from './components/pages/Quotes';
import { MenuItems } from './components/Navbar/MenuItems';
function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case '/About':
      component = <About />
      break
    case '/Quotes':
      component = <Quotes />
      break
  }

  return (
    <div className="App">
    

    <>
     <Navbar />
    {component}
    </>
    </div>





  );

  
}

export default App;
