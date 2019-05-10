import React from 'react';

//images
import homeImage from './assets/home-image.png';

const Home = () => {
	return (
		<div className="home">
			<div className="home-content-container">
				<div className="home-content-left">
					<h1 className="home-name">Tony Nguyen</h1>
					<div className="home-quote-container">
						<p className="home-quote-marks">"</p>
						<p className="home-quote">
							Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit, sed do 
							eiusmod tempor incididunt ut labore
							et dolore magna aliqua.
						</p>
						<div className="home-author-container">
							<div className="home-line"></div>
							<p>
								Person Name
							</p>
						</div>
					</div>
				</div>
				<div className="home-content-right">
					<img src={homeImage} alt="people studying"/>
				</div>
			</div>
		</div>
	);
}

export default Home;