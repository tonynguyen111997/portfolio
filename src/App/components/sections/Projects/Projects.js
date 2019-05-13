import React from 'react';

//components
import ProjectsList from './ProjectsList/ProjectsList';

const Projects = () => {
	return (
		<div className="projects">
			<div className="projects-top"></div> {/* projects-top & projects-bottom is for layout*/}
			<div className="projects-body">
				<h2>Projects</h2>
				<ProjectsList />
			</div>
			<div className="projects-bottom">
				<div className="projects-bottom-left">a</div>
				<div className="projects-bottom-right"></div>
			</div>
		</div>
	);
}

export default Projects;