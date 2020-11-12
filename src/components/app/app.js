import React from 'react';

import AppHeader from '../app-header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

const App = () => {
	const todoData = [
		{label: 'Complited tusk', state: 'completed'},
		{label: 'Editing tusk', state: 'editing'},
		{label: 'Active tusk', state: 'active'},
	]

	return (
		<section className="todoapp">
			<header className="header">
				<AppHeader />
				<NewTaskForm />
			</header> 
			<section className="main">
				<TaskList todos={todoData} />
			</section>
			<Footer />
		</section>
	);
};

export default App;