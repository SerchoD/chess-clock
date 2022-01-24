import React from 'react';

import './ButtonTimer.scss';

const ButtonTimer = ({ buttonType, active, time, onClick }) => {
	return (
		<div
			className={`button-timer button-timer--${active}`}
			onClick={onClick}
		>
			<div className={`${buttonType}`}>
				<h1>{time}</h1>
			</div>
		</div>
	);
};

export default ButtonTimer;
