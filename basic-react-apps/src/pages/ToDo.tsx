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
	const addTask = (task: TaskInterface) => {
		if (inputTaskVal.length > 0) {
			setTaskList([...taskList, task]);
			setInputTaskVal("");
		} else console.log("New task name is too short.");
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
						ifTaskCompleted={taskList[i].ifTaskCompleted}
					></Task>
				))}

				{taskList.length > 0 ? (
					<ClearDoneTasks setTaskList={setTaskList} taskList={taskList} />
				) : (
					""
				)}
			</article>
		</>
	);
}
