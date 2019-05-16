import React from 'react';

const ProjectHeader = (props) => {
	const { initHeader } = props;

	return (
		<div className="project-header">
			<h2 ref={h2 => initHeader(h2)}>P</h2>
			<h2 ref={h2 => initHeader(h2)}>r</h2>
			<h2 ref={h2 => initHeader(h2)}>o</h2>
			<h2 ref={h2 => initHeader(h2)}>j</h2>
			<h2 ref={h2 => initHeader(h2)}>e</h2>
			<h2 ref={h2 => initHeader(h2)}>c</h2>
			<h2 ref={h2 => initHeader(h2)}>t</h2>
			<h2 ref={h2 => initHeader(h2)}>s</h2>
		</div>
	);
}

export default ProjectHeader;