import React from 'react';

//images
import blueExit from './assets/blue-exit.svg';

const WhiteExitButton = (props) => {
	const { changePage } = props;
	return (
		<button className="white-exit" onClick={() => changePage('landing')}>
			<img src={blueExit} alt="blue X" />
		</button>
	);
}

export default WhiteExitButton;