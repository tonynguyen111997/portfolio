import React, { Component } from 'react';

class Navbar extends Component{
  handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
  }

	render(){
		return(
			<div className="navbar">
				<div className="nav-item-container">
					<p className="nav-title">
						Tony Nguyen
					</p>
					<div className="nav-link-container">
						<button onClick={() => this.handleScrollToElement('home')}>Home</button>
						<button onClick={() => this.handleScrollToElement('about')}>About</button>
						<button onClick={() => this.handleScrollToElement('skills')}>Skills</button>
						<button onClick={() => this.handleScrollToElement('projects')}>Projects</button>
						<button onClick={() => this.handleScrollToElement('contact')}>Contact</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;