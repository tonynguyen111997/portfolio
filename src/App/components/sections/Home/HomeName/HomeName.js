import React from 'react';

const HomeName = (props) => {
	const { initFirstName, initLastName } = props;
	return (
		<div className="home-name">
			<div className="first-name">
				<p ref={p => initFirstName(p)}>T</p>
				<p ref={p => initFirstName(p)}>o</p>
				<p ref={p => initFirstName(p)}>n</p>
				<p ref={p => initFirstName(p)}>y</p>
			</div>
			<div className="last-name">
				<p ref={p => initLastName(p)}>N</p>
				<p ref={p => initLastName(p)}>g</p>
				<p ref={p => initLastName(p)}>u</p>
				<p ref={p => initLastName(p)}>y</p>
				<p ref={p => initLastName(p)}>e</p>
				<p ref={p => initLastName(p)}>n</p>
			</div>
		</div>
	);
}

export default HomeName;