import React from "react";

function Task({text, category, handleDeleteTask, display}) {
	//console.log("task", task)
	//console.log("task category", category)
	return (
		<div className="task" style={{display: {display}}}>
		<div className="label">{category}</div>
		<div className="text">{text}</div>
		<button className="delete" onClick={() => handleDeleteTask(text)}>X</button>
		</div>
	);
}

export default Task;
