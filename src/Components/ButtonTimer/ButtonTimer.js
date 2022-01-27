import React from 'react';

import './ButtonTimer.scss';

const ButtonTimer = ({ buttonType, active, lose, showTime, onClick }) => {
	return (
		<div
			className={`button-timer button-timer--${active} button-timer--${lose}`}
			onClick={onClick}
		>
			<div className={`${buttonType}`}>
				<h1 className='timer-text'>{showTime}</h1>
			</div>
		</div>
	);
};

export default ButtonTimer;
