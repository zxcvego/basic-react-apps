import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import "./ToDo.css";
import Task from "../components/Task";
import "../components/ClearDoneTasks";
import ClearDoneTasks from "../components/ClearDoneTasks";
import { Link } from "react-router-dom";

interface TaskInterface {
	name: string;
	isTaskCompleted: boolean;
	nameChanging: boolean;
}

const LOCAL_STORAGE_TASKLIST = "tasks";

export default function ToDo() {
	const [taskList, setTaskList] = useState<TaskInterface[]>(() => {
		const data = window.localStorage.getItem(LOCAL_STORAGE_TASKLIST);
		return !!data ? JSON.parse(data) : [];
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
		if (inputTask.value.length <= 0) return alert("Task name is too short!");

		if (checkIfTaskExists(task.name)) {
			inputTask.setValue("");
			return alert("Task already exists!");
		}

		setTaskList([...taskList, task]);
		inputTask.setValue("");
	};

	return (
		<>
			<header className="todo-header">
				<h1>
					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
						Hello ToDo List!
					</Link>
				</h1>
			</header>
			<div className="todo-flex-container">
				<article className="functional-task-menu">
					<input
						type="text"
						className="insert-input"
						placeholder={"New task"}
						onChange={inputTask.onChange}
						value={inputTask.value}
						required
					/>
					<button
						className="insert-button"
						onClick={() =>
							addTask({
								name: inputTask.value,
								isTaskCompleted: false,
								nameChanging: false,
							})
						}
					>
						Add
					</button>
				</article>
				<article className="task-list">
					{taskList.map((_singleTask, i) => (
						<Task
							key={i}
							id={i}
							taskList={taskList}
							setTaskList={setTaskList}
						/>
					))}
				</article>
				{}
				{taskList.length ? (
					<ClearDoneTasks setTaskList={setTaskList} taskList={taskList} />
				) : null}
			</div>
		</>
	);
}
