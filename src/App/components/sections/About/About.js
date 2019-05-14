import React from 'react';

//images
import selfImage from './assets/self-image.jpg';

const About = () => {
	return (
		<div className="about">
			<div className="about-content-container">
				<div className="about-left">
					<h2>About</h2>
					<img className="about-img" src={selfImage} alt="image of myself" />
				</div>
				<div className="about-right">
					<h3>Who am I?</h3>
					<p className="about-title">Full Stack Developer</p>
					<p>
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
			</div>
		</div>
	);
}

export default About;