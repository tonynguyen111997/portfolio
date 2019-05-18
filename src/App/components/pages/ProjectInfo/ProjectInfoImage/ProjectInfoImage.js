import React from 'react';

//images
import takeStand from '../assets/take-stand-large.png';
import rightArrow from '../assets/arrow-right.png';
import leftArrow from '../assets/arrow-left.png';

const ProjectInfoImage = () => {
	return (
		<div className="project-info-image">
			<img src={takeStand} alt="take stand" />
			<div className="project-info-overlay">
				<button>
					<img src={leftArrow} alt="left arrow" />
				</button>
				<button>
					<img src={rightArrow} alt="right arrow" />
				</button>
			</div>
		</div>
	);
}

export default ProjectInfoImage;