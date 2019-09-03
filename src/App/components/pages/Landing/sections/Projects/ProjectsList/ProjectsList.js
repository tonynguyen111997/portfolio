import React from 'react';

//images
import ledkyb from '../assets/ledkyb.jpg';
import iesd from '../assets/iesd.jpg';
import portfolio from '../assets/portfolio.jpg';
import ledkybTeamManager from '../assets/ledkyb-team-manager.jpg';
import smilur from '../assets/smilur.jpg';
import nacc from '../assets/nacc.jpg';

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
					onProjectClick={"https://ledkyb.com/"}
					projectTitle={"Ledkyb Studios, LLC"}
					projectType={"Web App"}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={iesd} 
					onProjectClick={"https://www.iesd.com/"}
					projectTitle={"IESD, Inc"}
					projectType={"Web App"}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={portfolio} 
					onProjectClick={"https://tonynguyen111997.github.io/portfolio/"}
					projectTitle={"Personal Portfolio"}
					projectType={"Web App"}
					/>
			</div>
			<div className="projects-row">
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={ledkybTeamManager} 
					onProjectClick={""}
					projectTitle={"Ledkyb Team Manager"}
					projectType={"Full Stack App"}
					/>
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={smilur} 
					onProjectClick={""}
					projectTitle={"Smilur Mobile App"}
					projectType={"Mobile App"}
					/>
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={nacc}
					onProjectClick={"http://nacrane.net/"}
					projectTitle={"North American Company"}
					projectType={"Front-end"}
					/>
			</div>
		</div>
	);
}

export default ProjectsList;