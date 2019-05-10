import React from 'react';

//images
import hamburger from './assets/hamburger.svg';

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu-hamburger-container">
				<img src={hamburger} alt="menu hamburger" />
			</div>
			<div className="menu-dark-box"></div>
		</div>
	);
}

export default Menu;