import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import "./ToDo.css";
import Task from "../components/Task";
import "../components/ClearDoneTasks";
import ClearDoneTasks from "../components/ClearDoneTasks";
import CancelChange from "../components/CancelChange";

interface TaskInterface {
	name: string;
	isTaskCompleted: boolean;
	nameChanging: boolean;
}

interface ChangeTaskName {
	taskId: number;
	value: boolean;
}

const LOCAL_STORAGE_TASKLIST = "tasks";

export default function ToDo() {
	const [taskList, setTaskList] = useState<TaskInterface[]>(() => {
		const data = window.localStorage.getItem(LOCAL_STORAGE_TASKLIST);
		return !!data ? JSON.parse(data) : [];
	});
	const [changeNameStatus, setChangeNameStatus] = useState<ChangeTaskName>({
		taskId: 0,
		value: false,
	});

	const inputTask = useInput("");

	useEffect(() => {
		const data = JSON.stringify(taskList);
		window.localStorage.setItem(LOCAL_STORAGE_TASKLIST, data);
	}, [taskList]);

	const checkIfTaskExists = (taskName: string) => {
		for (let i = 0; i < taskList.length; i++) {
			if (taskName === taskList[i].name) return true;
		}
		return false;
	};

	const addTask = (task: TaskInterface) => {
		if (inputTask.value.length <= 0) alert("Task name is too short!");

		if (checkIfTaskExists(task.name)) {
			inputTask.setValue("");
			return alert("Task already exists!");
		}

		setTaskList([...taskList, task]);
		inputTask.setValue("");
	};

	const resetChangeMode = () => {
		taskList[changeNameStatus.taskId].nameChanging = false;
		setChangeNameStatus({ taskId: 0, value: false });
	};

	const changeName = () => {
		if (inputTask.value.length <= 0) return alert("Task name is too short!");

		if (checkIfTaskExists(inputTask.value)) {
			resetChangeMode();
			inputTask.setValue("");
			return alert("Task already exists!");
		}

		taskList[changeNameStatus.taskId].name = inputTask.value;
		resetChangeMode();
		inputTask.setValue("");
	};

	const ifChangingName = changeNameStatus.value;
	const changeNameOrAddTask = () => {
		ifChangingName
			? changeName()
			: addTask({
					name: inputTask.value,
					isTaskCompleted: false,
					nameChanging: false,
			  });
	};

	return (
		<>
			<header className="todo-header">
				<h1>Hello ToDo List!</h1>
			</header>
			<div className="todo-flex-container">
				<article className="functional-task-menu">
					<input
						type="text"
						className="insert-input"
						placeholder={ifChangingName ? "Changing task name..." : "New task"}
						onChange={inputTask.onChange}
						value={inputTask.value}
						required
					/>
					<button className="insert-button" onClick={() => changeNameOrAddTask}>
						{ifChangingName ? "Change" : "Add"}
					</button>
				</article>
				<article className="task-list">
					{taskList.map((_singleTask, i) => (
						<Task
							key={i}
							id={i}
							taskList={taskList}
							setTaskList={setTaskList}
							changeNameStatusValue={ifChangingName}
							changeNameStatusTaskId={changeNameStatus.taskId}
							setChangeNameStatus={setChangeNameStatus}
						></Task>
					))}
				</article>
				{ifChangingName ? (
					<CancelChange
						taskList={taskList}
						setChangeNameStatus={setChangeNameStatus}
						changeNameStatusTaskId={changeNameStatus.taskId}
					/>
				) : taskList.length > 0 && !ifChangingName ? (
					<ClearDoneTasks setTaskList={setTaskList} taskList={taskList} />
				) : null}
			</div>
		</>
	);
}
