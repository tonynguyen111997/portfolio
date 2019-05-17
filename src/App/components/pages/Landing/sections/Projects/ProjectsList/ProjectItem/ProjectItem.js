import React from 'react';

const ProjectItem = (props) => {
	const { projectImg, projectImgDesc, initProject } = props;
	return (
		<div className="project-item" ref={div => initProject(div)}>
			<img src={projectImg} alt={projectImgDesc} />
		</div>
	);
}

export default ProjectItem;