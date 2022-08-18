import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TicTacToe from "./pages/TicTacToe";
import ToDo from "./pages/ToDo";
import Weather from "./pages/Weather";

function App() {
	return (
		<>
			<Homepage />
			<ToDo />
			<TicTacToe />
			<Weather />
		</>
	);
}

export default App;
