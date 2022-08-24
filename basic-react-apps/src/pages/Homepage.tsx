import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import logo from "../logo.svg";

export default function Homepage() {
	const navigate = useNavigate();

	return (
		<>
			<div className="homepage-flex-container">
				<header className="homepage-header">
					<h1>Basic React.js Applications</h1>
				</header>
				<article className="app-flex-container">
					<button className="app-box" onClick={() => navigate("/todo-list")}>
						<h2>ToDo List</h2>
					</button>
					<button className="app-box" onClick={() => navigate("/weather")}>
						<h2>Weather</h2>
					</button>
				</article>
			</div>
			{/* <img src={logo} alt="logo" className="react-logo" /> */}
		</>
	);
}
