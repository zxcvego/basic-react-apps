import React, { useContext } from "react";
import "./Task.css";

export default function Task(props: any) {
	return (
		<li>
			<span className="task-name">{props.taskName}</span>
			<button
				className="cancel-button"
				onClick={() => {
					const array = props.taskList;
					let index = -1;
					for (let i = 0; i < array.length; i++) {
						if (array[i].name === props.taskName) {
							index = i;
							break;
						}
					}
					props.setTaskList(
						props.taskList.filter((task: any, i: number) => i !== index)
					);
				}}
			>
				Cancel
			</button>
			<button className="modify-button">Modify</button>
			<button className="done-button">Done</button>
		</li>
	);
}
