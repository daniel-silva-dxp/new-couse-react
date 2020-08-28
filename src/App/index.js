import React, { Component } from 'react';
import Item from '../Components/Item';
import NewButton from '../Components/NewButton';

import './style.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			btnContent: '',
			btn: ''
		};
	}

	render() {
		return (
			<div className="container">
				<div className="content-wrap">
					<Item classContent={this.state.classContent} classBtn={this.state.btn} />
					<div className="align-items">
						<NewButton
							handleClick={() =>
								this.setState({
									btnContent: 'circle-content-animate',
									btn: 'circle-animate'
								})}
						>
							Animate Ball
						</NewButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
