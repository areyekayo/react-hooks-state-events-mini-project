import React from "react";

function CategoryFilter({categories, selectedCategory, handleCategoryClick}) {

	function setClassName(category) {
		if (selectedCategory === "All"){
			//do not set class name
		}
		else if (selectedCategory === category){
			return "selected"
		}
	}

	return (
		<div className="categories">
		<h5>Category filters</h5>
			{categories.map((category) => (

				<button key={category} value={category} onClick={handleCategoryClick} className={setClassName(category)} >{category}</button>
			))}
		</div>
	);
	}

export default CategoryFilter;
