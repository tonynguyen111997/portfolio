import React from 'react';

//sections
import Modal from '../../Modal/Modal';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

//components
import Navbar from '../../Navbar/Navbar';
import ReturnButton from '../../ReturnButton/ReturnButton';

//Testing
import  iesdPic from './sections/Projects/assets/iesd.jpg';

const Landing = (props) => {
  const { changePage } = props;
	return (
		<div className="landing">
      <Modal 
        imgSrc={iesdPic}
        imgAlt={"Test"}
        projectSkills={[]}
      />
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