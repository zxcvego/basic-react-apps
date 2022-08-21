import "./Task.css";

export default function Task(props: any) {
	const getIndexOfTask = () => {
		const tempTaskList = props.taskList;
		let index = -1;
		for (let i = 0; i < tempTaskList.length; i++) {
			if (tempTaskList[i].name === props.taskName) {
				index = i;
				break;
			}
		}
		return index;
	};

	const completeTask = () => {
		const tempTaskList = JSON.parse(JSON.stringify(props.taskList));
		for (let i = 0; i < tempTaskList.length; i++) {
			if (i === getIndexOfTask()) tempTaskList[i].ifTaskCompleted = true;
		}
		props.setTaskList(tempTaskList);
	};

	const removeTask = () => {
		props.setTaskList(
			props.taskList.filter((task: any, i: number) => i !== getIndexOfTask())
		);
	};

	return (
		<li
			className={
				props.taskList[getIndexOfTask()].ifTaskCompleted === true ? "done" : ""
			}
		>
			<span className="task-name">{props.taskName}</span>
			<button className="cancel-button" onClick={removeTask}>
				Cancel
			</button>
			<button className="modify-button">Modify</button>
			<button className="done-button" onClick={completeTask}>
				Done
			</button>
		</li>
	);
}
