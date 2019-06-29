import React from 'react';

//images
import phone from '../assets/phone.png';
import laptop from '../assets/laptop.png';

const SkillsLeft = () => {
	return (
		<div className="skills-left">
			<div className="skills-device-container">
				<img id="skills-phone" className="skills-phone" src={phone} alt="phone" />
				<img id="skills-laptop" className="skills-laptop" src={laptop} alt="laptop" />
			</div>
			<p>
				Responsive, Dynamic and Optimized Performance are qualities that I 
				strive to achieve when building applications.
			</p>
		</div>
	);
}

export default SkillsLeft;