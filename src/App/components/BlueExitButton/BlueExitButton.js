import React from 'react';

//images
import whiteExit from './assets/white-exit.svg';

const BlueExitButton = (props) => {
	const { changePage } = props;
	return (
		<button className="blue-exit" onClick={() => changePage('landing')}>
			<img src={whiteExit} alt="white X" />
		</button>
	);
}

export default BlueExitButton;