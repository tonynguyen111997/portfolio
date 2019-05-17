import React from 'react';

const SkillsIcon = (props) => {
	const { imageIcon, imageDesc, initIconList } = props;
	return (
		<div className="skills-icon-container" ref={div => initIconList(div)}>
			<img className="skills-icon" src={imageIcon} alt={imageDesc} />
		</div>
	);
}

export default SkillsIcon;