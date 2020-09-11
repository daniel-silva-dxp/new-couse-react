import React from 'react';
import Button from '../Button';
import { FaFolderOpen, FaStar } from 'react-icons/fa';

import './style.css';

const Actions = ({ getUserRepos,  getUserStarreds}) => {
	return (
		<div className="wrap-button">
			<Button handleClick={getUserRepos}><FaFolderOpen/></Button>
			<Button handleClick={getUserStarreds}><FaStar/></Button>
		</div>
	);
};

export default Actions;
