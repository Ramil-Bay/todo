import React from 'react';

import './task.css'

const Task = ({label}) => {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" />
			<label>
				<span className="description">{label}</span>
			</label>
			<button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
		</div>
	)
}

export default Task;