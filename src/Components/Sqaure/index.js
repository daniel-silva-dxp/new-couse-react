import React from 'react';

import './style.css';

const Square = ({ handleClick }) => {
	return (
		<div className="square square-flex" onClick={handleClick}>
			<div className="txt">Event</div>
		</div>
	);
};

export default Square;
