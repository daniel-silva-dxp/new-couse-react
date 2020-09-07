import React from 'react';

import './style.css';

const Search = () => {
	return (
		<div className="input-group">
			<input type="search" required />
			<span className="bar" />
			<label>Search user GitHub</label>
		</div>
	);
};

export default Search;
