import React from 'react';
import './MainContainer.scss';

const MainContainer = ({ children, full, top, customClass, customStyle }) => {
	return (
		<div
			style={customStyle}
			className={`col-12 d-flex justify-content-center ${full &&
				'full-height'} ${top &&
				'full-height--top'} main-container ${customClass}`}
		>
			{children}
		</div>
	);
};

export default MainContainer;
