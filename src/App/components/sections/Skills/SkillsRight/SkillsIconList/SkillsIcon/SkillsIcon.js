import React from 'react';

const SkillsIcon = (props) => {
	const { imageIcon, imageDesc } = props;
	return (
		<img className="skills-icon" src={imageIcon} alt={imageDesc} />
	);
}

export default SkillsIcon;