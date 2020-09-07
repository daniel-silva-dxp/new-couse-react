import React from 'react';
import Actions from '../Actions';
import Repos from '../Repos';

import './style.css';

const Bio = () => {
	return (
		<div>
			<div className="wrap-user-info wrap-align">
				<div className="photo-user">
					<img srcSet="http://ilustracode.com.br/assets/images/author.jpg" />
				</div>
				<div className="user-info">
					<h1>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Daniel Silva
						</a>
					</h1>
					<h4>daniel-silva-dxp</h4>
					<div className="wrap-repos-info">
						<ul className="repos-info">
							<li>
								<span>Repositórios</span>
								<span>10</span>
							</li>
							<li>
								<span>Seguidores</span>
								<span>10</span>
							</li>
							<li>
								<span>Seguindo</span>
								<span>10</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Actions />
			<Repos />
		</div>
	);
};

export default Bio;
