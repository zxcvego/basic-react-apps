export default function ClearDoneTasks(props: any) {
	const clearEachDoneTask = () => {
		props.setTaskList(
			props.taskList.filter(
				(task: any, i: number) => task.ifTaskCompleted === false
			)
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
