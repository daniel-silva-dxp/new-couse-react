import React, { Component } from 'react';
import Home from '../Pages/Home';

import './style.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="content">
					<Home />
				</div>
			</div>
		);
	}
}

export default App;
