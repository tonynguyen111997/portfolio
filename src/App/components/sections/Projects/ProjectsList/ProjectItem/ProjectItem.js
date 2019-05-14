import React from 'react';

const ProjectItem = (props) => {
	const { projectImg, projectImgDesc } = props;
	return (
		<div className="project-item">
			<img src={projectImg} alt={projectImgDesc} />
		</div>
	);
}

export default ProjectItem;