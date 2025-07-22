import { useState } from 'react';
import List from '@mui/material/List';
import Todo from './Todo';

export default function Todolist() {
	const initialTasks = [
		{
			id: 'c4f89f3e-9c26-4b52-9b85-b31e7f7df2a6',
			task: 'Clean out the garage',
			completed: false
		},
		{
			id: '7d1e1449-a6b7-46d1-a2e9-690f6d5aef63',
			task: 'Finish React tutorial',
			completed: false
		},
		{
			id: '18a5b3f0-87d7-438d-b362-5c0660142db6',
			task: 'Call mom',
			completed: true
		},
		{
			id: '5e9051d1-37d7-42c2-bfe6-ec7edc6e1e3f',
			task: 'Buy groceries',
			completed: false
		},
		{
			id: 'aae2cc08-9e87-4a76-a343-8b1a19bc0a5b',
			task: 'Read 20 pages of a book',
			completed: false
		}
	];

	const [tasks, setTasks] = useState(initialTasks);

	const handleToggle = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed
					};
				} else {
					return task;
				}
			})
		);
	};

	const handleDelete = (id) => {
		console.log('delete');

		//copies previous state object and filters out every task that doesnt have the same id as deleted task
		setTasks((prevTasks) => {
			return prevTasks.filter((task) => task.id !== id);
		});
	};

	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{tasks.map((task) => (
				<Todo
					key={task.id}
					task={task}
					handleDelete={() => handleDelete(task.id)}
					handleToggle={() => handleToggle(task.id)}
				/>
			))}
		</List>
	);
}
