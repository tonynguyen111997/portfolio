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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			</p>
		</div>
	);
}

export default SkillsLeft;