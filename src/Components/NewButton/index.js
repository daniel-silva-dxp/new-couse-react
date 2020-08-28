import React from 'react';

import './style.css';

const NewButton = ({ children, handleClick }) => {
	return (
		<button className="btn btn-medium btn-white" onClick={handleClick}>
			{children}
		</button>
	);
};

export default NewButton;
