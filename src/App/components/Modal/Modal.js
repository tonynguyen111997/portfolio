import React, { Component } from 'react';

class Modal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { imgSrc, imgAlt, projectTitle, projectDesc, projectSkills } = this.props;

    const skills = projectSkills.map(skill => {
      return (
        <a href={skill.href} target="_blank">
          <img src={skill.imgSrc} alt={skill.imgAlt} />
        </a>
      )
    })

    return (
      <div className="modal-overlay">
        <div className="modal">
          {/* <img src={imgSrc} alt={imgAlt} /> */}
          <div className="project-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
          <div className="skills-container">
            {skills}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;