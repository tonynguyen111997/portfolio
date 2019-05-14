import React from 'react';

//images
import linkedinIcon from './assets/linkedin.png';

const Contact = () => {
	return (
		<div className="contact">
			<h2>Contact Me</h2>
			<a href="mailto:tonynguyen111997@gmail.com?subject=">
				tonynguyen111997@gmail.com
			</a>
			<a href="https://www.linkedin.com/in/tonynguyen111997/">
				<img src={linkedinIcon} alt="linkedin icon" />
			</a>
		</div>
	);
}

export default Contact;