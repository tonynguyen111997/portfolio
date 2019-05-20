import React from 'react';

//sections
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

//components
import Navbar from '../../Navbar/Navbar';
import ReturnButton from '../../ReturnButton/ReturnButton';

const Landing = (props) => {
  const { changePage } = props;
	return (
		<div className="landing">
      <Navbar />
      <ReturnButton />
      <Home />
      <About />
      <Skills changePage={changePage}/>
      <Projects changePage={changePage}/>
      <Contact />
		</div>
	);
}

export default Landing;