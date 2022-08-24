import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ToDo from "./pages/ToDo";
import Weather from "./pages/Weather";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/todo-list" element={<ToDo />} />
				<Route path="/weather" element={<Weather />} />
			</Routes>
		</>
	);
}

export default App;
