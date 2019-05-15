import React from 'react';

const AboutContent = (props) => {
	const { initTitle, initJob, initDesc } = props;

	return (
	<div className="about-content">
		<h3 ref={h3 => initTitle(h3)}>Who am I?</h3>
		<p className="about-title" ref={p => initJob(p)}>Full Stack Developer</p>
		<p ref={p => initDesc(p)}>
			Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation
			ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
			</p>
		</div>
	);
}

export default AboutContent;