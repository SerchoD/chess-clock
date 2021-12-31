import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainClock from '../Pages/Main/MainClock';
import { PATHS } from '../constants/PATHS';

const RouterApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PATHS.BASE_URL} element={<MainClock />} />
				<Route path='*' element={<Navigate to={PATHS.BASE_URL} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
