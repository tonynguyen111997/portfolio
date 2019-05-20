import React from 'react';

//components
import LinkedInButton from './LinkedInButton/LinkedInButton';

const Contact = () => {
	return (
		<div id="contact" className="contact">
			<h2>Contact Me</h2>
			<a href="mailto:tonynguyen111997@gmail.com?subject=">
				tonynguyen111997@gmail.com
			</a>
			<LinkedInButton />
		</div>
	);
}

export default Contact;