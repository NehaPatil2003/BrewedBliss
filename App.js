import React from 'react';
import NavBar from './component/NavBar';
import Coffee from './component/Coffee';
import About from './component/About_us';
import Menu from './component/Menu';  // Added import statement for Menu component
import './component/Component_css/App.css';

function App() {
  return (
    <>
      <NavBar title="Brewed Bliss Cafe" />
      <Coffee />
      <About />
      <Menu />
    </>
  );
}

export default App;
