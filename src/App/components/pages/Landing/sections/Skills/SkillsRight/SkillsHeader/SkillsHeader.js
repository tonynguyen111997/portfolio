import React from 'react';

const SkillsHeader = (props) => {
	const { initHeader } = props;

	return (
		<div className="skills-header">
			<h2 ref={h2 => initHeader(h2)}>S</h2>
			<h2 ref={h2 => initHeader(h2)}>k</h2>
			<h2 ref={h2 => initHeader(h2)}>i</h2>
			<h2 ref={h2 => initHeader(h2)}>l</h2>
			<h2 ref={h2 => initHeader(h2)}>l</h2>
			<h2 ref={h2 => initHeader(h2)}>s</h2>
		</div>
	);
}

export default SkillsHeader;