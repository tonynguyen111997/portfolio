import React from 'react';

const ProjectItem = (props) => {
	const { projectImg } = props;
	return (
		<div className="project-item">
			<img src={projectImg} />
		</div>
	);
}

export default ProjectItem;