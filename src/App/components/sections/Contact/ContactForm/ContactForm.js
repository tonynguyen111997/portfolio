import React from 'react';

const ContactForm = () => {
	return (
		<form className="contact-form">
			<input type="text" name="name" required/>
			<input type="email" name="email" required/>
			<textarea name="message" size="500" required/>
			<button>Submit</button>
		</form>
	);
}

export default ContactForm;