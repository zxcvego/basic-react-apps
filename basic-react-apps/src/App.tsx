import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div>
			<img src={logo} alt="logo" className="app-logo" />
			<h1>Basic React.js Applications</h1>
			<div className="select-box">
				<h2>ToDo List</h2>
			</div>
			<div className="select-box">
				<h2>Habit Tracker</h2>
			</div>
			<div className="select-box">
				<h2>Tic Tac Toe</h2>
			</div>
			<div className="select-box">
				<h2>TBA</h2>
			</div>
		</div>
	);
}

export default App;
