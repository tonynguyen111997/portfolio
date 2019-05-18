import React, { Component } from 'react';

//images
import hamburger from './assets/hamburger.svg';
import githubBlack from './assets/github-black.svg';
import linkedinBlack from './assets/linkedin-black.svg';

//anim
import { menuAnim } from '../../../util/anims/menuAnim';

class Menu extends Component{
	constructor(){
		super();

		this.state = {
			menu: false
		}
	}

	// openMenu = () => {
	// 	const menuOpen = new menuAnim();
	// 	menuOpen.initMenuAnim().play();
	// 	return this.setState({
	// 		menu: true
	// 	})
	// }

	// closeMenu = () => {
	// 	const menuClose = new menuAnim();
	// 	menuClose.closeMenuAnim().play();
	// 	return this.setState({
	// 		menu: false
	// 	})
	// }

	// menuOption = () => {
	// 	if(this.state.menu){
	// 		return this.closeMenu();
	// 	}
	// 	return this.openMenu();
	// }

	render(){
		return (
			<div id="menu" className="menu">
				<div className="menu-hamburger-container">
					<img 
						id="hamburger"
						src={hamburger} 
						alt="menu hamburger" 
						onClick={this.menuOption}
					/>
				</div>
				<div className="menu-white-box">
					<a id="menu-linkedin" href ="https://www.linkedin.com/in/tonynguyen111997/">
						<img src={linkedinBlack} alt="linkedin" />
					</a>
					<a id="menu-github" href="https://github.com/tonynguyen111997">
						<img src={githubBlack} alt="github" />
					</a>
				</div>
				<div className="menu-dark-box"></div>
			</div>
		);
	}
}

export default Menu;