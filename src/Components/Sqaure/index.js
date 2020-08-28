import React from 'react';

import './style.css';

const Button = ({ handleClick, children }) => {
	return (
		<div className="wrap" onClick={handleClick}>
			<div className="btn">{children}</div>
			<div className="bg-btn" />
		</div>
	);
};

export default Button;
