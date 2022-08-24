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

	const changeTaskStatusCheckbox = () => {
		const status = taskList[id].isTaskCompleted;
		changeTaskStatus(!status);
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
		? "single-task task-functional-button change"
		: taskList[id].isTaskCompleted
		? "single-task task-functional-button done"
		: "single-task task-functional-button";

	return (
		<li className={TaskClassName}>
			<span className="task-name">{taskList[id].name}</span>
			<input
				className="if-done-checkbox"
				type="checkbox"
				onClick={changeTaskStatusCheckbox}
			/>
			<div className="task-functional-buttons">
				<button
					className="task-functional-button change"
					onClick={
						!changeNameStatusValue
							? initializeChangeTaskName
							: resetChangeTaskName
					}
				>
					Change name
				</button>

				<button className="task-functional-button cancel" onClick={removeTask}>
					Cancel
				</button>
			</div>
		</li>
	);
}
