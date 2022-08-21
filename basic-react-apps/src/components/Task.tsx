import "./Task.css";

interface TaskProps {
	id: number;
	taskName: string;
	setTaskList: (taskList: any[]) => void;
	taskList: any[];
}

export default function Task({
	taskList,
	id,
	setTaskList,
	taskName,
}: TaskProps) {
	const changeTaskStatus = (status: boolean) => {
		const tempTaskList = JSON.parse(JSON.stringify(taskList));
		for (let i = 0; i < tempTaskList.length; i++) {
			if (i === id) tempTaskList[i].isTaskCompleted = status;
		}
		setTaskList(tempTaskList);
	};

	const removeTask = () => {
		setTaskList(taskList.filter((_task: any, i: number) => i !== id));
	};

	return (
		<li className={taskList[id].isTaskCompleted ? "done" : ""}>
			<span className="task-name">{taskName}</span>
			<button className="cancel-button" onClick={removeTask}>
				Cancel
			</button>
			<button className="undone-button" onClick={() => changeTaskStatus(false)}>
				Undone
			</button>
			<button className="done-button" onClick={() => changeTaskStatus(true)}>
				Done
			</button>
		</li>
	);
}
