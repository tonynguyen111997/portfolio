import React from 'react';

//images
import ledkyb from '../assets/ledkyb.jpg';
import iesd from '../assets/iesd.jpg';
import nacc from '../assets/nacc.jpg';
import jsIcon from '../../Skills/assets/js-logo.png'

//components
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectsList = (props) => {
	const { initProject, onProjectClick } = props;

	return (
		<div className="projects-list">
			<div className="projects-row">
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={ledkyb} 
					onProjectClick={() => onProjectClick(
						iesd, // Project Image
						[{ 
							imgSrc: jsIcon, // Skill img src
							imgAlt: 'JavaScript', 
							href: 'https://google.com', 
						}],
						"Testing", // Project Title
						"Ledkyb", // Company
						"Desc here", // Description
						"https://google.com"
					)}
					projectTitle={"Ledkyb Studios, LLC"}
					projectType={"Front-end"}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={iesd} 
					onProjectClick={"https://www.iesd.com/"}
					projectTitle={"IESD, Inc"}
					projectType={"Front-end"}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={nacc}
					onProjectClick={"http://www.nacrane.com/"}
					projectTitle={"North American Company"}
					projectType={"Front-end"}
					/>
			</div>
		</div>
	);
}

export default ProjectsList;