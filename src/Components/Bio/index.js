import React from 'react';
import Actions from '../Actions';
import Repos from '../Repos';
import { FaFolderOpen, FaStar, FaUserFriends, FaUserPlus } from 'react-icons/fa';

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
							<li className="margin-right-10">
								<span className='margin-right-5'><FaFolderOpen/></span>
								<span>10</span>
							</li>
							<li className="margin-right-10">
								<span className='margin-right-5'><FaStar/></span>
								<span>10</span>
							</li>
							<li className="margin-right-10">
								<span className='margin-right-5'><FaUserFriends /></span>
								<span>10</span>
							</li>
							<li>
								<span className='margin-right-5'><FaUserPlus /></span>
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
