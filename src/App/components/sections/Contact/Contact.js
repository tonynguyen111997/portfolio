import React from 'react';

//components
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
	return (
		<div className="contact">
			<h2>Contact</h2>
			<p>Have a question or want to work together?</p>
			<ContactForm />
		</div>
	);
}

export default Contact;