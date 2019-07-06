import React from 'react';

const SkillsIcon = (props) => {
	const { imageIcon, imageDesc, initIconList, skillHref} = props;
	return (
		<div className="skills-icon-container" ref={div => initIconList(div)}>
			<img 
				className="skills-icon" 
				src={imageIcon} 
				alt={imageDesc}
			/>
			<a href={skillHref} className="skills-icon-overlay" target="_blank"></a>
		</div>
	);
}

export default SkillsIcon;