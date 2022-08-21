import "./ToDo.css";
import Task from "../components/Task";
import { useState } from "react";
import "../components/ClearDoneTasks";
import ClearDoneTasks from "../components/ClearDoneTasks";
interface TaskInterface {
	name: string;
	ifTaskCompleted: boolean;
}

export default function ToDo() {
	const [taskList, setTaskList] = useState<TaskInterface[]>([]);
	const [inputTaskVal, setInputTaskVal] = useState("");
	const checkIfTaskExists = (input: string) => {
		for (let i = 0; i < taskList.length; i++) {
			if (input === taskList[i].name) return true;
		}
		return false;
	};
	const addTask = (task: TaskInterface) => {
		if (inputTaskVal.length <= 0) {
			alert("Task name is too short!");
		} else if (checkIfTaskExists(task.name)) {
			alert("Task already exists!");
			setInputTaskVal("");
		} else {
			setTaskList([...taskList, task]);
			setInputTaskVal("");
		}
	};
	const handleInputChange = (e: any) => setInputTaskVal(e.target.value);
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
					value={inputTaskVal}
					required
				/>
				<button
					onClick={() =>
						addTask({ name: inputTaskVal, ifTaskCompleted: false })
					}
				>
					Add
				</button>
			</article>
			<article className="task-list">
				{taskList.map((singleTask, i) => (
					<Task
						key={i}
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
