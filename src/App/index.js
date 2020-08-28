import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import LikeButton from '../Components/LikeButton';
import Title from '../Components/Title';

import './style.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		}
		this.click = this.click.bind(this)
	}
	click() {
		this.setState({
			name: 'My name is Daneil Silva'
		});
	}
	render() {
		return (
			<div>
				<Banner />
				<Title name={this.state.name} />
				<div>
					<Button handleClick={this.click}>Click</Button>
					<LikeButton />
				</div>
			</div>
		);
	}
}

export default App;
