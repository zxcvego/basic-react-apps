import "./Task.css";

export default function Task() {
	return (
		<>
			<li>
				<span className="task-name">task</span>
				<button className="cancel-button">Cancel</button>
				<button className="modify-button">Modify</button>
				<button className="done-button">Done</button>
			</li>
		</>
	);
}
