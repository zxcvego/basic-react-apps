import "./ToDo.css";

export default function ToDo() {
	return (
		<>
			<header>
				<h1>Hello ToDo List!</h1>
			</header>
			<article className="functional-task-menu">
				<input type="text" placeholder="New task" required />
				<button>Add</button>
			</article>
		</>
	);
}
