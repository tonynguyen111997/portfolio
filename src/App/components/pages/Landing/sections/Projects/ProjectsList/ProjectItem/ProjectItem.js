import React from 'react';

const ProjectItem = (props) => {
	const { projectImg, initProject, onProjectClick, projectTitle, projectType } = props;

	const learnMore = (onProjectClick.length > 0) ? "Learn more" : "";
	return (
		<div className="project-item" ref={div => initProject(div)}>
			<img src={projectImg} alt={projectTitle} />
			<div className="project-item-overlay">
				<p>{projectTitle}</p>
				<p className="project-type">{projectType}</p>
				<a href={onProjectClick} target="_blank">
					{learnMore}
				</a>
			</div>
		</div>
	);
}

export default ProjectItem;