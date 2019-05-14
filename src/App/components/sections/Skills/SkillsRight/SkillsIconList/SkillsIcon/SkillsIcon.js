import React from 'react';

const SkillsIcon = (props) => {
	const { imageIcon, imageDesc } = props;
	return (
		<div className="skills-icon-container">
			<img className="skills-icon" src={imageIcon} alt={imageDesc} />
			<div className="skills-icon-overlay"></div>
		</div>
	);
}

export default SkillsIcon;