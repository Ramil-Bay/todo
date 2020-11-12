import React from 'react';

import Task from '../task';

import './task-list.css';

const TaskList = ({ todos }) => {
	const elements = todos.map(elem => {
		return (
			<li className={elem.state}><Task {...elem}/></li>
		)
	})
	return (
		<ul className="todo-list">
			{elements}
		</ul>
	)
}

export default TaskList;