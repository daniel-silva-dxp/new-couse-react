import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Square from '../Components/Sqaure';
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
					<Square handleClick={this.click} />
				</div>
			</div>
		);
	}
}

export default App;
