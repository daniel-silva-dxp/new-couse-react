import React, { Component } from 'react';
import Timer from '../Components/Timer';
import NewButton from '../Components/NewButton';

import './style.css';

class App extends Component {
	constructor() {
		console.log('constructor');
		super();
		this.state = {
			showTimer: true
		};
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
				{this.state.showTimer && <Timer />}
				<NewButton handleClick={() => this.setState({ showTimer: !this.state.showTimer })}>
					Show/Hide Timer
				</NewButton>
			</div>
		);
	}
}

export default App;
