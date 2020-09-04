import React, { Component } from 'react';
import NewButton from '../NewButton';

import './style.css';

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			timer: 0,
			showTimer: true
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

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', this.props, nextProps);
	}

	render() {
		return (
			<div className="box">
				{this.state.showTimer && (
					<div>
						<div className="title">TIMER</div>
						<div className="display">{this.state.timer}</div>
					</div>
				)}
				<NewButton handleClick={() => this.setState({ timer: this.state.timer + 10 })}>Change Timer</NewButton>
			</div>
		);
	}
}

export default Timer;
