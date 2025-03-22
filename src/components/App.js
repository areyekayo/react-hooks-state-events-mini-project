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

	function handleCategoryClick(event){
		setCategoryFilter(event.target.value)
	}

	function handleDeleteTask(key){
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
		<div className="App">
		<h2>My tasks</h2>
		<CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick}/>
		<NewTaskForm />
		<TaskList 
			tasks={filteredTasks} 
			selectedCategory={selectedCategory}
			handleDeleteTask={handleDeleteTask}/>
		</div>
	);
}

export default App;
