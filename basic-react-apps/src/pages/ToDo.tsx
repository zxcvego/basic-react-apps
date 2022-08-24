import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import "./ToDo.css";
import Task from "../components/Task";
import "../components/ClearDoneTasks";
import ClearDoneTasks from "../components/ClearDoneTasks";

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

	const changeName = () => {
		if (inputTask.value.length <= 0) {
			alert("Task name is too short!");
		} else if (checkIfTaskExists(inputTask.value)) {
			alert("Task already exists!");
			taskList[changeNameStatus.taskId].nameChanging = false;
			setChangeNameStatus({ taskId: 0, value: false });
			inputTask.setValue("");
		} else {
			taskList[changeNameStatus.taskId].name = inputTask.value;
			taskList[changeNameStatus.taskId].nameChanging = false;
			setChangeNameStatus({ taskId: 0, value: false });
			inputTask.setValue("");
		}
	};

	return (
		<>
			<header>
				<h1>Hello ToDo List!</h1>
			</header>
			<article className="functional-task-menu">
				<input
					type="text"
					placeholder={
						changeNameStatus.value ? "Changing task name..." : "New task"
					}
					onChange={inputTask.onChange}
					value={inputTask.value}
					required
				/>
				<button
					onClick={() =>
						changeNameStatus.value
							? changeName()
							: addTask({
									name: inputTask.value,
									isTaskCompleted: false,
									nameChanging: false,
							  })
					}
				>
					{changeNameStatus.value ? "Change" : "Add"}
				</button>
			</article>
			<article className="task-list">
				{taskList.map((_singleTask, i) => (
					<Task
						key={i}
						id={i}
						taskList={taskList}
						setTaskList={setTaskList}
						changeNameStatusValue={changeNameStatus.value}
						changeNameStatusTaskId={changeNameStatus.taskId}
						setChangeNameStatus={setChangeNameStatus}
					></Task>
				))}

				{taskList.length > 0 && !changeNameStatus.value ? (
					<ClearDoneTasks setTaskList={setTaskList} taskList={taskList} />
				) : null}
			</article>
		</>
	);
}
