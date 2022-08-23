import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import "./ToDo.css";
import Task from "../components/Task";
import "../components/ClearDoneTasks";
import ClearDoneTasks from "../components/ClearDoneTasks";

interface TaskInterface {
	name: string;
	isTaskCompleted: boolean;
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
		if (inputTask.value.length <= 0) {
			alert("Task name is too short!");
		} else if (checkIfTaskExists(task.name)) {
			alert("Task already exists!");
			inputTask.setValue("");
		} else {
			setTaskList([...taskList, task]);
			inputTask.setValue("");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		inputTask.setValue(e.target.value);

	return (
		<>
			<header>
				<h1>Hello ToDo List!</h1>
			</header>
			<article className="functional-task-menu">
				<input
					type="text"
					placeholder="New task"
					onChange={handleInputChange}
					value={inputTask.value}
					required
				/>
				<button
					onClick={() =>
						addTask({ name: inputTask.value, isTaskCompleted: false })
					}
				>
					Add
				</button>
			</article>
			<article className="task-list">
				{taskList.map((singleTask, i) => (
					<Task
						key={i}
						id={i}
						taskName={taskList[i].name}
						setTaskList={setTaskList}
						taskList={taskList}
					></Task>
				))}

				{taskList.length > 0 ? (
					<ClearDoneTasks setTaskList={setTaskList} taskList={taskList} />
				) : null}
			</article>
		</>
	);
}
