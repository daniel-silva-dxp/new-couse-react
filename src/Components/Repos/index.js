import React from 'react';

import './style.css';

const Repos = ({ className, title, repos }) => {
	return (
		<div className={`box ${className}`}>
			<h4>{title}</h4>

			<ul>
				{repos.map((repo, index) => (
					<li>
						<a href={repo.link} target="_blank" key={index} rel="noopener noreferrer">
							{repo.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Repos;
