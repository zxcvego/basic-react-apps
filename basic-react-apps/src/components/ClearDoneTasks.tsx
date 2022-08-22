interface TaskProps {
	setTaskList: (taskList: any[]) => void;
	taskList: any[];
}

export default function ClearDoneTasks({ taskList, setTaskList }: TaskProps) {
	const clearEachDoneTask = () => {
		setTaskList(
			taskList.filter((task: any, _i: number) => task.isTaskCompleted === false)
		);
	};

	return (
		<>
			<button className="clear-tasks-button" onClick={clearEachDoneTask}>
				Clear each done task
			</button>
		</>
	);
}
