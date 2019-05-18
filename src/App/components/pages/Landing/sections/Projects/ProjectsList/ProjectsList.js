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

const ProjectsList = (props) => {
	const { initProject, onProjectClick } = props;

	return (
		<div className="projects-list">
			<div className="projects-row">
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={takeStand} 
					projectImgDesc={'take-stand project'}
					onProjectClick={onProjectClick}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={stats} 
					projectImgDesc={'stats project'}
					onProjectClick={onProjectClick}
					/>
				<ProjectItem 
					initProject={initProject[0]}
					projectImg={tablet} 
					proejctImgDesc={'tablet project'}
					onProjectClick={onProjectClick}
					/>
			</div>
			<div className="projects-row">
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={twoPhones} 
					projectImgDesc={'twoPhones project'}
					onProjectClick={onProjectClick}
					/>
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={numbers} 
					projectImgDesc={'numbers project'}
					onProjectClick={onProjectClick}
					/>
				<ProjectItem 
					initProject={initProject[1]}
					projectImg={phones}
					projectImgDesc={'phones project'}
					onProjectClick={onProjectClick}
					/>
			</div>
		</div>
	);
}

export default ProjectsList;