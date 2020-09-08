import React from 'react';
import Button from '../Button';
import { FaFolderOpen, FaStar } from 'react-icons/fa';

import './style.css';

const Actions = () => {
	return (
		<div className="wrap-button">
			<Button><FaFolderOpen/></Button>
			<Button><FaStar/></Button>
		</div>
	);
};

export default Actions;
