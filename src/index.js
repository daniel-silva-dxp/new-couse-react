import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <h1>NAVBAR</h1>;
};

const container = document.querySelector('#root');
container ? ReactDOM.render(<App />, container) : false;
