import React, { Component } from 'react';

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
				<h1>Home</h1>
				<form>
					<input
						type="text"
						value={this.state.value}
						onChange={(e) => {
							this.setState({
								value: e.target.value
							});
						}}
					/>
				</form>
				<div>{this.state.value}</div>
			</div>
		);
	}
}
