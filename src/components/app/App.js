import './App.css';
import React from 'react';
import {Game} from "../game";


function App() {
	return (
		<div className="app">
			<header >
				<h1 className="text-danger">Memory Game</h1 >
			</header >
			<Game />
		</div>
	);
}

export default App;
