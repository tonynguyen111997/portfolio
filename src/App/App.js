import React from 'react';

//sections
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';

//components
import Menu from './components/Menu/Menu';
import ReturnButton from './components/ReturnButton/ReturnButton';
import Overlay from './components/Overlay/Overlay';

function App() {
  return (
    <div className="App">
    	<Menu />
      <ReturnButton />
      <Overlay />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
