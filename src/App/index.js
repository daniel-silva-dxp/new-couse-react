import React, { Component } from 'react';
import Home from '../Pages/Home';

import './style.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			userInfo: null,
			repos: [],
			starreds: []
		};
	}

	getGitHubApiUrl(username, type) {
		const user = username ? `/${username}` : '';
		const typeInt = type ? `/${type}` : '';

		return `https://api.github.com/users${user}${typeInt}`;
	}

	getDataGitHubUser(e) {
		const value = e.target.value;
		const keyCode = e.which || e.keyCode;
		const ENTER = 13;

		if (keyCode === ENTER) {
			if (value) {
				this.setState({ show: true });
				fetch(this.getGitHubApiUrl(value)).then((data) => data.json()).then((data) => {
					this.setState({
						userInfo: {
							name: data.name,
							login: data.login,
							avatar_url: data.avatar_url,
							bio: data.bio,
							public_repos: data.public_repos,
							followers: data.followers,
							following: data.following
						},
						repos: [],
						starred: []
					});
				});
			} else {
				this.setState({
					show: false,
					userInfo: null,
					repos: [],
					starred: []
				});
			}
		}
	}

	getUserRepos(type) {
		const login = this.state.userInfo.login;
		fetch(this.getGitHubApiUrl(login, type))
							.then((data) => data.json())
							.then((data) => {
								this.setState({
									[type]: data.map((repo) => {
										return {
											name: repo.name,
											id: repo.id,
											link: repo.html_url
										}
									})
								})
							})		
	}

	render() {
		return (
			<div className="container">
				<div className="content">
					<Home
						showBio={this.state.show}
						userInfo={this.state.userInfo}
						repos={this.state.repos}
						starred={this.state.starred}
						handleSearch={(e) => this.getDataGitHubUser(e)}
						getUserRepos={ () => this.getUserRepos('repos')}
						getUserStarreds={() => this.getUserRepos('starred')}
					/>
				</div>
			</div>
		);
	}
}
