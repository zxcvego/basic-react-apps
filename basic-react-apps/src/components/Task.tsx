import "./Task.css";

interface TaskProps {
	id: number;
	taskList: any[];
	changeNameStatusValue: boolean;
	changeNameStatusTaskId: number;
	setTaskList: (taskList: any[]) => void;
	setChangeNameStatus: (changeNameStatus: {
		taskId: number;
		value: boolean;
	}) => void;
}

export default function Task({
	id,
	taskList,
	changeNameStatusValue,
	changeNameStatusTaskId,
	setTaskList,
	setChangeNameStatus,
}: TaskProps) {
	const changeTaskStatus = (status: boolean) => {
		const tempTaskList = JSON.parse(JSON.stringify(taskList));
		for (let i = 0; i < tempTaskList.length; i++) {
			if (i === id) tempTaskList[i].isTaskCompleted = status;
		}
		setTaskList(tempTaskList);
	};

	const removeTask = () => {
		changeNameStatusValue
			? alert("Confirm modifying task name!")
			: setTaskList(taskList.filter((_task: any, i: number) => i !== id));
	};

	const initializeChangeTaskName = () => {
		if (!changeNameStatusValue) {
			setChangeNameStatus({ taskId: id, value: true });
			taskList[id].nameChanging = true;
		}
	};

	const resetChangeTaskName = () => {
		if (changeNameStatusValue && changeNameStatusTaskId === id) {
			setChangeNameStatus({ taskId: 0, value: false });
			taskList[id].nameChanging = false;
		} else alert("You are already changing a task.");
	};

	const TaskClassName = taskList[id].nameChanging
	? "change-name"
	: taskList[id].isTaskCompleted
	? "done"
	: ""

	return (
		<li
			className={
				TaskClassName}
		>
			<span className="task-name">{taskList[id].name}</span>
			<button className="cancel-button" onClick={removeTask}>
				Cancel
			</button>
			<button
				className="change-name-button"
				onClick={
					!changeNameStatusValue
						? initializeChangeTaskName
						: resetChangeTaskName
				}
			>
				{!changeNameStatusValue ? "Change name" : "Do not change"}
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
