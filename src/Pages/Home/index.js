import React from 'react';
import Bio from '../../Components/Bio';
import Search from '../../Components/Search';

import './style.css';

const Home = ({ showBio, userInfo, repos, starred, handleSearch, getUserRepos, getUserStarreds }) => {
	return (
		<div>
			<Search labelValue="Search GitHub User" handleSearch={handleSearch} />
			<Bio 
				showBio={showBio} 
				userInfo={userInfo} 
				repos={repos} 
				starred={starred} 
				getUserRepos={getUserRepos} 
				getUserStarreds={getUserStarreds}
			/>
		</div>
	);
};

export default Home;
