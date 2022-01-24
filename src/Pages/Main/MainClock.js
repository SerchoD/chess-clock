import React, { useEffect, useState } from 'react';
import ButtonTimer from '../../Components/ButtonTimer/ButtonTimer';
import MainContainer from '../../Components/MainContainer/MainContainer';

import './MainClock.scss';

const MainClock = () => {
	const [upTimer, setUpTimer] = useState(10);
	const [botTimer, setBotTimer] = useState({
		ms: 0,
		s: 0,
		m: 5,
		h: 0,
	});
	const [botRunning, setBotRunning] = useState(false);
	const [interv, setInterv] = useState();
	const [status, setStatus] = useState(0);

	const start = () => {
		setBotRunning(true);
		run();
		setStatus(1);
		setInterv(setInterval(run, 10));
	};
	let updatedMs = botTimer.ms,
		updatedS = botTimer.s,
		updatedM = botTimer.m,
		updatedH = botTimer.h;

	const run = () => {
		if (updatedM === 0) {
			updatedH = updatedH - 1;
			updatedM = 60;
		}
		if (updatedS === 0) {
			updatedM = updatedM - 1;
			updatedS = 59;
		}
		if (updatedMs === 0) {
			updatedS = updatedS - 1;
			updatedMs = 100;
		}
		updatedMs = updatedMs - 1;
		return setBotTimer({
			ms: updatedMs,
			s: updatedS,
			m: updatedM,
			h: updatedH,
		});
	};

	const stop = () => {
		setBotRunning(false);

		clearInterval(interv);
		setStatus(2);
	};

	const reset = () => {
		clearInterval(interv);
		setStatus(0);
		setBotTimer({ ms: 0, s: 0, m: 0, h: 0 });
	};

	return (
		<MainContainer full>
			<div className='mainClock-container col-12'>
				<div className='upper-timer timer-container'>
					<ButtonTimer
						buttonType='invert'
						active='inactive'
						time={upTimer}
						// onClick={() => upTimerRun()}
					/>
				</div>
				<div className='center-bar'>
					<button className='menu-button'>menu</button>
					<button className='menu-button'>pause</button>
				</div>
				<div className='bottom-timer timer-container'>
					<ButtonTimer
						active='active'
						time={`${botTimer.m < 10 ? 0 : ''}${botTimer.m}:${
							botTimer.s < 10 ? 0 : ''
						}${botTimer.s}:${botTimer.ms < 10 ? 0 : ''}${
							botTimer.ms
						}`}
						onClick={botRunning ? stop : start}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default MainClock;
