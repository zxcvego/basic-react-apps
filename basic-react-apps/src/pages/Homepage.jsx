import "./Homepage.css";
import logo from "../logo.svg";

export default function Homepage() {
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
				<h2>Weather</h2>
			</div>
		</div>
	);
}
