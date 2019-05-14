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
				<ProjectItem projectImg={takeStand} projectImgDesc={'take-stand project'}/>
			</li>
			<li>
				<ProjectItem projectImg={stats} projectImgDesc={'stats project'}/>
			</li>
			<li>
				<ProjectItem projectImg={tablet} proejctImgDesc={'tablet project'}/>
			</li>
			<li>
				<ProjectItem projectImg={twoPhones} projectImgDesc={'twoPhones project'}/>
			</li>
			<li>
				<ProjectItem projectImg={numbers} projectImgDesc={'numbers project'}/>
			</li>
			<li>
				<ProjectItem projectImg={phones} projectImgDesc={'phones project'}/>
			</li>
		</ul>
	);
}

export default ProjectsList;