import React, { Component } from 'react';

//images
import arrow from './assets/arrow.svg';

class ReturnButton extends Component{
	//Function that on click will scroll to target location
  handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
  }

	render(){
		return(
			<button
				class="return-button" 
				onClick={() => this.handleScrollToElement('home')}>
				<img src={arrow} alt="return arrow" />
			</button>
		);
	}
}

export default ReturnButton;