import React from "react";

function NewTaskForm({categories, taskDetail, handleTaskDetail, taskCategory, handleTaskCategory, onTaskFormSubmit}) {
	//const [details, setDetails] = useState("");

	return (
		<form className="new-task-form" onSubmit={onTaskFormSubmit}>
		<label>
			Details
			<input type="text" name="text" onChange={handleTaskDetail} value={taskDetail} />
		</label>
		<label>
			Category
			<select name="category" value={taskCategory} onChange={handleTaskCategory}>
			{categories.filter(category => category !== "All").map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
			</select>
		</label>
		<input type="submit" value="Add task"/>
		</form>
	);
	}

export default NewTaskForm;
