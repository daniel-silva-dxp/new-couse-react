import React, { Component } from 'react';
import Home from '../Pages/Home';

import './style.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			show: true,
			userInfo: {
				userName: 'Daniel Silva'
			},
			repos: [ { link: '#', name: 'Repository' } ],
			starreds: [ { link: '#', name: 'Starred' } ]
		};
	}
	render() {
		return (
			<div className="container">
				<div className="content">
					<Home
						showBio={this.state.show}
						userInfo={this.state.userInfo}
						repos={this.state.repos}
						starreds={this.state.starreds}
					/>
				</div>
			</div>
		);
	}
}
