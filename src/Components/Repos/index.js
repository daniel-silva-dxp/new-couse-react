import React from 'react';

import './style.css';

const Repos = ({ className, title, repos }) => {
	return (
		<div className={`box ${className}`}>
			<h4>{title}</h4>
			<ul>
				{repos.map((repo, index) => (
					<li key={index}>
						<a href={repo.link} target="_blank" rel="noopener noreferrer">
							{repo.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Repos;
