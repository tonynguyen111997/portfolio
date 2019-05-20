import React from 'react';

const ContactButton = (props) => {
	const { url, src, alt } = props;
	return (
		<a href={url} className="contact-button">
			<img src={src} alt={alt} />
		</a>
	);
}

export default ContactButton;