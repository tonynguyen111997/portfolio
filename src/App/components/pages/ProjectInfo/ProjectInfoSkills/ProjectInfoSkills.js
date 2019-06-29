import React from 'react';

//images
import jsIcon from '../assets/js-icon.png';
import htmlIcon from '../assets/html-icon.png';

const ProjectInfoSkills = (props) => {
	const { changePage } = props;
	return (
		<div className="project-info-skills">
			<img src={jsIcon} alt="javascript" onClick={changePage}/>
			<img src={htmlIcon} alt="html" onClick={changePage}/>			
		</div>
	);
}

export default ProjectInfoSkills;