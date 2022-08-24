interface ChangeProps {
	taskList: any[];
	changeNameStatusTaskId: number;
	setChangeNameStatus: (changeNameStatus: {
		taskId: number;
		value: boolean;
	}) => void;
}

export default function CancelChange({
	taskList,
	changeNameStatusTaskId,
	setChangeNameStatus,
}: ChangeProps) {
	const cancelChangingName = () => {
		taskList[changeNameStatusTaskId].nameChanging = false;
		setChangeNameStatus({ taskId: 0, value: false });
	};

	return (
		<>
			<button className="bottom-functional-button" onClick={cancelChangingName}>
				Cancel changing name
			</button>
		</>
	);
}
