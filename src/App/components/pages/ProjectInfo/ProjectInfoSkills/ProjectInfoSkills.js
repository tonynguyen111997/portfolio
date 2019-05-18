import React from 'react';

//images
import jsIcon from '../assets/js-icon.png';
import htmlIcon from '../assets/html-icon.png';

const ProjectInfoSkills = () => {
	return (
		<div className="project-info-skills">
			<img src={jsIcon} alt="javascript" />
			<img src={htmlIcon} alt="html" />			
		</div>
	);
}

export default ProjectInfoSkills;