import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => {
		setToDo(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDos((toDos) => [toDo, ...toDos]);
		setToDo("");
	};
	return (
		<div>
			<h1>ToDo App</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					placeholder="insert your ToDo"
				></input>
				<button>insert</button>
			</form>
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
