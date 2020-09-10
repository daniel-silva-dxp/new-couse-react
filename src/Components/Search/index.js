import React from 'react';

import './style.css';

const Search = ({ labelValue, handleSearch }) => {
	return (
		<div className="input-group">
			<input type="search" required onKeyUp={handleSearch} />
			<span className="bar" />
			<label>{labelValue}</label>
		</div>
	);
};

export default Search;
