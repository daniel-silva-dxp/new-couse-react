import React from 'react';
import Actions from '../Actions';
import Repos from '../Repos';
import { FaFolderOpen, FaStar, FaUserFriends, FaUserPlus } from 'react-icons/fa';

import './style.css';

const Bio = ({ showBio, userInfo, repos, starreds }) => {
	return (
		<div>
			{showBio &&
			!!userInfo && (
				<div>
					<div className="wrap-user-info wrap-align">
						<div className="photo-user">
							<img src={userInfo.avatar_url} />
						</div>
						<div className="user-info">
							<h1>
								<a
									href={`https://github.com/${userInfo.login}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{userInfo.name}
								</a>
							</h1>
							<h4>{userInfo.login}</h4>
							<div className="wrap-repos-info">
								<ul className="repos-info">
									<li className="margin-right-15">
										<span className="margin-right-5">
											<FaFolderOpen />
										</span>
										<span>{userInfo.public_repos}</span>
									</li>
									<li className="margin-right-15">
										<span className="margin-right-5">
											<FaUserFriends />
										</span>
										<span>{userInfo.followers}</span>
									</li>
									<li>
										<span className="margin-right-5">
											<FaUserPlus />
										</span>
										<span>{userInfo.following}</span>
									</li>
								</ul>
								<p>{userInfo.bio}</p>
							</div>
						</div>
					</div>
					<Actions />
					<div>
						{!!repos.length && <Repos className="repos" title="Repositories" repos={repos} />}
						{!!starreds.length && <Repos className="starred" title="Starreds" repos={starreds} />}
					</div>
				</div>
			)}
			{!showBio && (
				<div className="wrap-user-info wrap-align">
					<div className="user-info">
						<h1>No Record Found</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default Bio;
