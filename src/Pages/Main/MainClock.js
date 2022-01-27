import React, { useEffect, useState } from 'react';
import IconPause from '../../assets/icons/IconPause/IconPause';
import ButtonTimer from '../../Components/ButtonTimer/ButtonTimer';
import MainContainer from '../../Components/MainContainer/MainContainer';

import './MainClock.scss';

const MainClock = () => {
	const [upLose, setUpLose] = useState(false);
	const [upTimer, setUpTimer] = useState({
		ms: 0,
		s: 0,
		m: 10,
		h: 0,
	});

	const showUpTimerMs = `.${upTimer.ms < 10 ? 0 : ''}${upTimer.ms}`;
	const showUpTimer = `${upTimer.m < 10 ? 0 : ''}${upTimer.m}:${
		upTimer.s < 10 ? 0 : ''
	}${upTimer.s}${upTimer.m <= 0 ? showUpTimerMs : ''}`;

	const [botLose, setBotLose] = useState(false);
	const [botTimer, setBotTimer] = useState({
		ms: 0,
		s: 0,
		m: 4,
		h: 0,
	});

	const showBotTimerMs = `.${botTimer.ms < 10 ? 0 : ''}${botTimer.ms}`;
	const showBotTimer = `${botTimer.m < 10 ? 0 : ''}${botTimer.m}:${
		botTimer.s < 10 ? 0 : ''
	}${botTimer.s}${botTimer.m <= 0 ? showBotTimerMs : ''}`;

	const [upRunning, setUpRunning] = useState(false);
	const [botRunning, setBotRunning] = useState(false);

	const [upInterv, setUpInterv] = useState();
	const [botInterv, setBotInterv] = useState();

	// ---------------- Up Clock ----------------
	const startUp = () => {
		setUpRunning(true);
		// runUp();
		setUpInterv(setInterval(runUp, 10));
	};

	let updatedUpMs = upTimer.ms,
		updatedUpS = upTimer.s,
		updatedUpM = upTimer.m,
		updatedUpH = upTimer.h;

	const runUp = () => {
		if (updatedUpM === 0 && updatedUpH > 0) {
			updatedUpH = updatedUpH - 1;
			updatedUpM = 60;
		}
		if (updatedUpS === 0) {
			if (updatedUpM >= 1) {
				updatedUpM = updatedUpM - 1;
				updatedUpS = 59;
			}
		}
		if (updatedUpMs === 0) {
			updatedUpS = updatedUpS - 1;
			updatedUpMs = 100;
		}
		updatedUpMs = updatedUpMs - 1;
		return setUpTimer({
			ms: updatedUpMs,
			s: updatedUpS,
			m: updatedUpM,
			h: updatedUpH,
		});
	};

	const stopUp = () => {
		setUpRunning(false);
		clearInterval(upInterv);
	};

	const resetUp = () => {
		clearInterval(upInterv);
		setUpRunning(false);
		setUpTimer({ ms: 0, s: 0, m: 10, h: 0 });
	};

	// ---------------- Bot Clock ----------------
	const startBot = () => {
		setBotRunning(true);
		// runBot();
		setBotInterv(setInterval(runBot, 10));
	};

	let updatedBotMs = botTimer.ms,
		updatedBotS = botTimer.s,
		updatedBotM = botTimer.m,
		updatedBotH = botTimer.h;

	const runBot = () => {
		if (updatedBotM === 0 && updatedBotH > 0) {
			updatedBotH = updatedBotH - 1;
			updatedBotM = 60;
		}
		if (updatedBotS === 0) {
			if (updatedBotM >= 1) {
				updatedBotM = updatedBotM - 1;
				updatedBotS = 59;
			}
		}
		if (updatedBotMs === 0) {
			updatedBotS = updatedBotS - 1;
			updatedBotMs = 100;
		}
		updatedBotMs = updatedBotMs - 1;
		return setBotTimer({
			ms: updatedBotMs,
			s: updatedBotS,
			m: updatedBotM,
			h: updatedBotH,
		});
	};

	const stopBot = () => {
		setBotRunning(false);
		clearInterval(botInterv);
	};

	const resetBot = () => {
		clearInterval(botInterv);
		setBotRunning(false);
		setBotTimer({ ms: 0, s: 0, m: 4, h: 0 });
	};

	useEffect(() => {
		if (
			upTimer.h == 0 &&
			upTimer.m == 0 &&
			upTimer.s == 0 &&
			upTimer.ms == 0
		) {
			stopUp();
			setUpLose(true);
		}
		if (
			botTimer.h == 0 &&
			botTimer.m == 0 &&
			botTimer.s == 0 &&
			botTimer.ms == 0
		) {
			stopBot();
			setBotLose(true);
		}
	}, [upTimer, botTimer]);

	return (
		<MainContainer full>
			<div className='mainClock-container col-12'>
				<div className='upper-timer timer-container'>
					<ButtonTimer
						// buttonType='invert'
						active={upRunning ? 'active' : 'inactive'}
						lose={upLose && 'lose'}
						showTime={showUpTimer}
						onClick={() => {
							if (!upLose && !botLose) {
								if (!upRunning && !botRunning) {
									startBot();
								}
								if (upRunning) {
									stopUp();
									startBot();
								}
							}
						}}
					/>
				</div>

				<div className='center-bar'>
					<button className='menu-button menu'>Menu</button>
					<button
						className='menu-button menu'
						onClick={() => {
							resetBot();
							resetUp();
						}}
					>
						Reset
					</button>

					<button
						className='menu-button pause'
						onClick={() => {
							stopUp();
							stopBot();
						}}
					>
						<IconPause />
					</button>
				</div>

				<div className='bottom-timer timer-container'>
					<ButtonTimer
						active={botRunning ? 'active' : 'inactive'}
						lose={botLose && 'lose'}
						showTime={showBotTimer}
						onClick={() => {
							if (!upLose && !botLose) {
								if (!upRunning && !botRunning) {
									startUp();
								}
								if (botRunning) {
									stopBot();
									startUp();
								}
							}
						}}
					/>
				</div>
			</div>
		</MainContainer>
	);
};

export default MainClock;
