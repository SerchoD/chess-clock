import React, { useEffect } from 'react';
import './App.css';
import RouterApp from './Router/RouterApp';

function App() {
	useEffect(() => {
		document.documentElement.requestFullscreen();
	}, []);

	return (
		<div className='App container d-flex '>
			<RouterApp />
		</div>
	);
}

export default App;
