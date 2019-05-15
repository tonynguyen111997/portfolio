import React from 'react';

const AboutHeader = (props) => {
	const { initHeader } = props;

	return (
		<div className="about-header">
			<h2 ref={h2 => initHeader(h2)}>A</h2>
			<h2 ref={h2 => initHeader(h2)}>b</h2>
			<h2 ref={h2 => initHeader(h2)}>o</h2>
			<h2 ref={h2 => initHeader(h2)}>u</h2>
			<h2 ref={h2 => initHeader(h2)}>t</h2>
		</div>
	);
}

export default AboutHeader;