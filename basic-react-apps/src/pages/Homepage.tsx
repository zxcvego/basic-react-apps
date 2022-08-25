import { useNavigate } from "react-router-dom";
import "./Homepage.css";

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
						<span>ToDo List</span>
					</button>
					<button className="app-box" onClick={() => navigate("/weather")}>
						<span>Weather</span>
					</button>
				</article>
			</div>
		</>
	);
}
