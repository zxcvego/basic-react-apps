import "./HomeMenu.css";

export default function HomeMenu() {
	return (
		<>
			<div className="grid-container">
				<button className="select-box">
					<h1>ToDo List</h1>
				</button>
				<button className="select-box">
					<h1>Habit Tracker</h1>
				</button>
				<button className="select-box">
					<h1>Tic Tac Toe</h1>
				</button>
				<button className="select-box">
					<h1>Weather</h1>
				</button>
			</div>
		</>
	);
}
