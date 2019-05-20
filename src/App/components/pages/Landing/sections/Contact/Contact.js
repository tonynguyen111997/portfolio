import React from 'react';

//images
import linkedin from './assets/linkedin.png'
import github from './assets/github.png';

//components
import ContactButton from './ContactButton/ContactButton';

const Contact = () => {
	return (
		<div id="contact" className="contact">
			<h2>Contact Me</h2>
			<a href="mailto:tonynguyen111997@gmail.com?subject=">
				tonynguyen111997@gmail.com
			</a>
			<div className="contact-button-container">
				<ContactButton
					url="https://www.linkedin.com/in/tonynguyen111997/"
					src={linkedin}
					alt="linkedin button"
				/>
				<ContactButton
					url="https://github.com/tonynguyen111997"
					src={github}
					alt="github button"
				/>
			</div>
		</div>
	);
}

export default Contact;