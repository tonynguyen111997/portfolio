import React from 'react';

//images
import jsIcon from '../assets/js-icon.png';
import htmlIcon from '../assets/html-icon.png';

//components
import SkillIcon from './ProjectInfoSkillIcon/ProjectInfoSkillIcon';

const ProjectInfoSkills = (props) => {
	const { skillList } = props;
	return (
		<div className="project-info-skills">
			<SkillIcon 
				skillHref={skillList.href}
				imageSrc={jsIcon}
			/>
			<a href="#"><img src={htmlIcon} alt="html"/></a>		
		</div>
	);
}

export default ProjectInfoSkills;