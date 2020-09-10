import React from 'react';
import Bio from '../../Components/Bio';
import Search from '../../Components/Search';

import './style.css';

const Home = ({ showBio, userInfo, repos, starreds, handleSearch }) => {
	return (
		<div>
			<Search labelValue="Search GitHub User" handleSearch={handleSearch} />
			<Bio showBio={showBio} userInfo={userInfo} repos={repos} starreds={starreds} />
		</div>
	);
};

export default Home;
