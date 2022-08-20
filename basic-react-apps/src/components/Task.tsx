import React from "react";
import "./Task.css";

export default function Task(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<li>
			<span className="task-name">{children}</span>
			<button className="cancel-button">Cancel</button>
			<button className="modify-button">Modify</button>
			<button className="done-button">Done</button>
		</li>
	);
}
