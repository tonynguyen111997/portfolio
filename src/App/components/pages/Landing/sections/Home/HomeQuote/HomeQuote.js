import React from 'react';

const HomeQuote = (props) => {
	const { initQuote } = props;

	return(
		<div id="home-quote" className="home-quote-container">
			<div ref={div => initQuote(div)} className="home-quote-content">
				<p className="home-quote-marks">"</p>
				<div className="home-quote">
					<p>
						But we do know that for habits 
						to permanently change, people 
						must believe that change is feasible.
					</p>
				</div>
				<div className="home-author-container">
					<div className="home-line"></div>
					<p>
						Charles Duhigg
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomeQuote;