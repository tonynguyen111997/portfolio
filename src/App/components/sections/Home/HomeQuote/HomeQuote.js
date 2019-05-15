import React, { Component } from 'react';

const HomeQuote = (props) => {
	const { initQuote } = props;

	return(
		<div id="home-quote" className="home-quote-container">
			<div ref={div => initQuote(div)} className="home-quote-content">
				<p className="home-quote-marks">"</p>
				<div className="home-quote">
					<p>
						Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore
						et dolore magna aliqua.
					</p>
				</div>
				<div className="home-author-container">
					<div className="home-line"></div>
					<p>
						Person Name
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomeQuote;