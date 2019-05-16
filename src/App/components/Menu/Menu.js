import React from 'react';

//images
import hamburger from './assets/hamburger.svg';
import githubBlack from './assets/github-black.svg';
import linkedinBlack from './assets/linkedin-black.svg';

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu-hamburger-container">
				<img src={hamburger} alt="menu hamburger" />
			</div>
			<div className="menu-white-box">
				<a href ="https://www.linkedin.com/in/tonynguyen111997/">
					<img src={linkedinBlack} alt="linkedin" />
				</a>
				<a href="https://github.com/tonynguyen111997">
					<img src={githubBlack} alt="github" />
				</a>
			</div>
			<div className="menu-dark-box"></div>
		</div>
	);
}

export default Menu;