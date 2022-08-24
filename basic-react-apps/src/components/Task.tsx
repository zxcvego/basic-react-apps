import { useState } from "react";
import useInput from "../hooks/useInput";
import "./Task.css";

interface TaskProps {
	id: number;
	taskList: any[];
	setTaskList: (taskList: any[]) => void;
}

export default function Task({ id, taskList, setTaskList }: TaskProps) {
	const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
	const editModeInput = useInput("");
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
		setTaskList(taskList.filter((_task: any, i: number) => i !== id));
	};

	const taskNameOrEditMode = () => {
		if (isEditModeEnabled) {
			return (
				<>
					<input
						className="edit-mode-input"
						onChange={editModeInput.onChange}
						placeholder={taskList[id].name}
					></input>
					<button
						className="edit-mode-button"
						onClick={() => {
							if (editModeInput.value !== "")
								taskList[id].name = editModeInput.value;
							setIsEditModeEnabled(false);
						}}
					>
						Change
					</button>
				</>
			);
		}
		return taskList[id].name;
	};

	return (
		<li
			className={
				taskList[id].isTaskCompleted ? "single-task done" : "single-task"
			}
		>
			<span
				className="task-name"
				onClick={() => (!isEditModeEnabled ? setIsEditModeEnabled(true) : null)}
			>
				{taskNameOrEditMode()}
			</span>
			<input
				className="if-done-checkbox"
				type="checkbox"
				onChange={changeTaskStatusCheckbox}
				checked={taskList[id].isTaskCompleted}
			/>
			<button className="remove" onClick={removeTask}>
				❌
			</button>
		</li>
	);
}
