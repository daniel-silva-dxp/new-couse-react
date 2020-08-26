import React, { Component } from 'react';
import Banner from '../Components/Banner';
import Title from '../Components/Title';

import './style.css';

class App extends Component {
	render() {
		return (
			<div>
				<Banner />
				<Title name="Daniel Silva" />
			</div>
		);
	}
}

export default App;
