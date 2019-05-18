import React from 'react';

const ProjectItem = (props) => {
	const { projectImg, projectImgDesc, initProject } = props;
	return (
		<div className="project-item" ref={div => initProject(div)}>
			<img src={projectImg} alt={projectImgDesc} />
			<div className="project-item-overlay">
				<p>Project Title</p>
				<button>
					Learn More
				</button>
			</div>
		</div>
	);
}

export default ProjectItem;