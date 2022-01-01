import React from 'react';
import ButtonTimer from '../../Components/ButtonTimer/ButtonTimer';
import MainContainer from '../../Components/MainContainer/MainContainer';

import './MainClock.scss';

const MainClock = () => {
	return (
		<MainContainer full>
			<div className='mainClock-container col-12'>
				<div className='upper-timer timer-container'>
					<ButtonTimer buttonType='invert' active='inactive' />
				</div>
				<div className='center-bar' style={{ color: 'wheat' }}>
					navbar menu
				</div>
				<div className='bottom-timer timer-container'>
					<ButtonTimer active='active' />
				</div>
			</div>
		</MainContainer>
	);
};

export default MainClock;
