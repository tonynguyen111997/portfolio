import React from 'react';

const ProjectInfoSkills = (props) => {
	const { skillHref, imageSrc } = props;
	return (
		<a href={skillHref} target="_blank"><img src={imageSrc} alt="skill"/></a>
	);
}

export default ProjectInfoSkills;