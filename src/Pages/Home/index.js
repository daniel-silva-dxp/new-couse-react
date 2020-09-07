import React, { Component } from 'react';
import Bio from '../../Components/Bio';
import Search from '../../Components/Search';

import './style.css';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
	}
	render() {
		return (
			<div>
				<Search />
				<Bio />
			</div>
		);
	}
}
