import React from "react";
import { Route, Routes } from "react-router-dom";
import HabitTracker from "./pages/HabitTracker";
import Homepage from "./pages/Homepage";
import TicTacToe from "./pages/TicTacToe";
import ToDo from "./pages/ToDo";
import Weather from "./pages/Weather";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/todo-list" element={<ToDo />} />
				<Route path="/habit-tracker" element={<HabitTracker />} />
				<Route path="/tic-tac-toe" element={<TicTacToe />} />
				<Route path="/weather" element={<Weather />} />
			</Routes>
		</>
	);
}

export default App;
