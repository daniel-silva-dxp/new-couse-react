import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Button from '../Components/Sqaure';
import Title from '../Components/Title';

import './style.css';

class App extends Component {
	click(e) {
		console.log(e.target);
	}
	render() {
		return (
			<div>
				<Banner />
				<Title name="Daniel Silva" />
				<div>
					<Button handleClick={this.click}>Click</Button>
				</div>
			</div>
		);
	}
}

export default App;
