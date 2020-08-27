import React from 'react';

import './style.css';

const Square = ({ handleClick }) => {
	return (
		<div className="wrap" onClick={handleClick}>
			<div className="btn">Clique aqui</div>
			<div className="bg-btn" />
		</div>
	);
};

export default Square;
