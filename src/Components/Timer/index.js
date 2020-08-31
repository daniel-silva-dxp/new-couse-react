import React, { Component } from 'react';

import './style.css';

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			timer: 0
		};
		this.timer;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				timer: this.state.timer + 1
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div className="box">
				<div className="title">TIMER</div>
				<div className="display">{this.state.timer}</div>
			</div>
		);
	}
}

export default Timer;
