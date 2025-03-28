import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
	const [taskList, setTasks] = useState(TASKS);
	const [selectedCategory, setCategoryFilter] = useState("All");
	const [taskDetail, setTaskDetail] = useState("");
	const [taskCategory, setTaskCategory] = useState("Code")

	function handleCategoryClick(event){
		setCategoryFilter(event.target.value)
	}

	function handleDeleteTask(key){
		const newTaskList = taskList.filter((task) => task.text !== key);
		setTasks(newTaskList) 
	}

	function handleTaskDetail(event){
		setTaskDetail(event.target.value)
	}

	function handleTaskCategory(event){
		setTaskCategory(event.target.value)
	}
	
	function onTaskFormSubmit(newTask){
		console.log(newTask)
		setTasks([...taskList, newTask])
		setTaskDetail("");
		setTaskCategory("Code");
	}

	const filteredTasks = taskList.filter((task) => {
		if (selectedCategory === "All"){
			return true
		}
		return task.category === selectedCategory
	})

	return (
		<div className="App">
		<h2>My tasks</h2>
		<CategoryFilter 
			categories={CATEGORIES} 
			selectedCategory={selectedCategory} 
			handleCategoryClick={handleCategoryClick}/>
		<NewTaskForm 
			categories={CATEGORIES}
			taskDetail={taskDetail}
			handleTaskDetail={handleTaskDetail}
			taskCategory={taskCategory}
			handleTaskCategory={handleTaskCategory}
			onTaskFormSubmit={onTaskFormSubmit}/>
		<TaskList 
			tasks={filteredTasks} 
			selectedCategory={selectedCategory}
			handleDeleteTask={handleDeleteTask}/>
		</div>
	);
}

export default App;
