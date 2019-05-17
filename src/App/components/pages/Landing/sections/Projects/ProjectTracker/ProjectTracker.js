import React from 'react';

//components
import ProjectTrackerItem from './ProjectTrackerItem/ProjectTrackerItem';

const ProjectTracker = (props) => {
	const { initProjectTracker } = props;

	return (
		<div className="project-tracker">
			<ProjectTrackerItem active={'active'} initProjectTracker={initProjectTracker}/>
			<ProjectTrackerItem initProjectTracker={initProjectTracker}/>
			<ProjectTrackerItem initProjectTracker={initProjectTracker}/>
		</div>
	);
}

export default ProjectTracker;