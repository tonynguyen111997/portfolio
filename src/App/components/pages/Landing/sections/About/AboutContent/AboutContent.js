import React from 'react';

const AboutContent = (props) => {
	const { initTitle, initJob, initDesc } = props;

	return (
	<div className="about-content">
		<h3 ref={h3 => initTitle(h3)}>Who am I?</h3>
		<p className="about-title" ref={p => initJob(p)}>Full Stack Developer</p>
		<p ref={p => initDesc(p)}>
			Self taught web developer that is always looking to grow and improve. 
			I am a passionate learner that is always eager to gain more experience. Learning 
			to program has been a passion of mine for many years now, because there is always 
			something new to learn. I enjoy solving real life problems by developing technologies 
			that solve them. 
		</p>
		</div>
	);
}

export default AboutContent;