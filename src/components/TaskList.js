import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory}) {
	const [taskList, setTasks] = useState(tasks);

	function handleDeleteTask(key){
		//console.log("delete key", key)
		const newTaskList = taskList.filter((task) => task.text !== key);
		setTasks(newTaskList) 
	}
	
	const filteredTasks = taskList.filter((task) => {
		if (selectedCategory === "All"){
			return true
		}
		return task.category === selectedCategory
	})

  	return (
		<div className="tasks">
			{filteredTasks.map((task) => (
				<Task key={task.text} text={task.text} category={task.category} handleDeleteTask={handleDeleteTask}/>
			))}
		</div>
	);
}

export default TaskList;
