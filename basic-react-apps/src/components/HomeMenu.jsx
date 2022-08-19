import "./HomeMenu.css";
import { useNavigate } from "react-router-dom";

export default function HomeMenu() {
	const navigate = useNavigate();

	return (
		<>
			<div className="grid-container">
				<button className="select-box" onClick={() => navigate("/todo-list")}>
					<h1>ToDo List</h1>
				</button>
				<button
					className="select-box"
					onClick={() => navigate("/habit-tracker")}
				>
					<h1>Habit Tracker</h1>
				</button>
				<button className="select-box" onClick={() => navigate("/tic-tac-toe")}>
					<h1>Tic Tac Toe</h1>
				</button>
				<button className="select-box" onClick={() => navigate("/weather")}>
					<h1>Weather</h1>
				</button>
			</div>
		</>
	);
}
