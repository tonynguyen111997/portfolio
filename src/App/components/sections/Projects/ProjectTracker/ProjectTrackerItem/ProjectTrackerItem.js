import React from 'react';

const ProjectTrackerItem = (props) => {
	const { active, initProjectTracker } = props;

	return (
		<button 
			className={`project-tracker-item ${active}`}
			ref={button => initProjectTracker(button)}
			>
		</button>
	);
}

export default ProjectTrackerItem;