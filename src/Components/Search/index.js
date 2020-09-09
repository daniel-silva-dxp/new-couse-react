import React from 'react';

import './style.css';

const Search = ({ labelValue }) => {
	return (
		<div className="input-group">
			<input type="search" required />
			<span className="bar" />
			<label>{labelValue}</label>
		</div>
	);
};

export default Search;
