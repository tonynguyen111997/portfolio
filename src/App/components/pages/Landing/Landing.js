import React, { Component } from 'react';

//sections
import ProjectModal from '../../ProjectModal/ProjectModal';
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
import jsIcon from './sections/Skills/assets/js-logo.png';

class Landing extends Component{
  constructor(props){
    super(props);

    this.state = {
      projectModal: {
        imgSrc: "",
        projectSkills: [],
        projectTitle: "",
        projectCompany: "",
        projectDesc: "",
        projectLink: ""
      }
    }
  }

  handleProjectClick = (imgSrc, projectSkills, projectTitle, projectCompany, projectDesc, projectLink) => {
    this.setState({
      projectModal: {
        imgSrc,
        projectSkills,
        projectTitle,
        projectCompany,
        projectDesc,
        projectLink
      }
    });
  }

  render(){
  const { changePage } = this.props;
  const { imgSrc, projectSkills, projectTitle, projectCompany, projectDesc, projectLink } = this.state.projectModal;

  const modal = (projectTitle === "") ? null : (
    <ProjectModal 
      imgSrc={imgSrc}
      projectSkills={projectSkills}
      projectTitle={projectTitle}
      projectCompany={projectCompany}
      projectDesc={projectDesc}
      projectLink={projectLink}
    />);

    return (
      <div className="landing">
        {modal}
        <Navbar />
        <ReturnButton />
        <Home />
        <About />
        <Skills changePage={changePage}/>
        <Projects changePage={changePage} handleProjectClick={this.handleProjectClick}/>
        <Contact />
      </div>
    );
  }
}

export default Landing;