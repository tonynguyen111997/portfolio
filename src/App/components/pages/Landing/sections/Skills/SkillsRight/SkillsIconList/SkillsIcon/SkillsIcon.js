import React from 'react';

const SkillsIcon = (props) => {
	const { imageIcon, imageDesc, initIconList, onSkillClick } = props;
	return (
		<div className="skills-icon-container" ref={div => initIconList(div)}>
			<img 
				className="skills-icon" 
				src={imageIcon} 
				alt={imageDesc} 
			/>
			<div className="skills-icon-overlay" onClick={onSkillClick}></div>
		</div>
	);
}

export default SkillsIcon;