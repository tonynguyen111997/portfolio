import React from 'react';

//images
import linkedinIcon from '../assets/linkedin.png';

const LinkedInButton = () => {
	return (
		<a href="https://www.linkedin.com/in/tonynguyen111997/" class="linkedin-button">
			<img src={linkedinIcon} alt="linkedin icon" />
		</a>
	);
}

export default LinkedInButton;