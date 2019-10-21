import React, { Component } from 'react';

class ProjectModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { imgSrc, projectTitle, projectCompany, projectDesc, projectSkills, projectLink } = this.props;

    const skills = projectSkills.map(skill => {
      return (
        <a href={skill.href} target="_blank"class="modal-skill-img">
          <img src={skill.imgSrc} alt={skill.imgAlt} />
        </a>
      )
    })

    console.log(projectLink);

    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-project-image" style={{backgroundImage: `url(${imgSrc})`}}></div>
          <div className="modal-skills-container">
            {skills}
          </div>
          <div className="modal-project-info">
            <a href={projectLink} className="modal-project-title" target="_blank"><strong>{projectTitle}</strong></a>
            <p className="modal-project-company">{projectCompany}</p>
            <p className="modal-project-desc">{projectDesc}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectModal;