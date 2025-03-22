import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
	const [taskList, setTasks] = useState(tasks);

	function handleDeleteTask(key){
		//console.log("delete key", key)
		const newTaskList = taskList.filter((task) => task.text !== key);
		setTasks(newTaskList) 
	}
	

  	return (
		<div className="tasks">
			{taskList.map((task) => (
				<Task key={task.text} text={task.text} category={task.category} handleDeleteTask={handleDeleteTask}/>
			))}
		</div>
	);
}

export default TaskList;
