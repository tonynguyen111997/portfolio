import React from 'react';

//images
import takeStand from '../assets/take-stand.jpg';
import stats from '../assets/stats.jpg';
import tablet from '../assets/tablet.jpg';
import twoPhones from '../assets/two-phones.jpg';
import numbers from '../assets/numbers.jpg';
import phones from '../assets/phones.jpg';

//components
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectsList = () => {
	return (
		<ul className="projects-list">
			<li>
				<ProjectItem projectImg={takeStand}/>
			</li>
			<li>
				<ProjectItem projectImg={stats}/>
			</li>
			<li>
				<ProjectItem projectImg={tablet}/>
			</li>
			<li>
				<ProjectItem projectImg={twoPhones}/>
			</li>
			<li>
				<ProjectItem projectImg={numbers}/>
			</li>
			<li>
				<ProjectItem projectImg={phones}/>
			</li>
		</ul>
	);
}

export default ProjectsList;