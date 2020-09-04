import React, { Component } from 'react';
import Timer from '../Components/Timer';

import './style.css';

class App extends Component {
	constructor() {
		console.log('constructor');
		super();
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		console.log('render');
		return (
			<div className="container">
				<Timer />
			</div>
		);
	}
}

export default App;
