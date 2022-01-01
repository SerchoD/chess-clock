import React from 'react';

import './ButtonTimer.scss';

const ButtonTimer = ({ buttonType, active }) => {
	return (
		<div className={`button-timer button-timer--${active}`}>
			<div className={`${buttonType}`}>
				<h1>12:34</h1>
			</div>
		</div>
	);
};

export default ButtonTimer;
