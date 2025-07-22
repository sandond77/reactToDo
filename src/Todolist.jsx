import { useState } from 'react';
import List from '@mui/material/List';
import Todo from './Todo';
import Todoform from './Todoform';
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
	const initialTasks = [
		{
			id: uuidv4(),
			task: 'Clean out the garage',
			completed: false
		},
		{
			id: uuidv4(),
			task: 'Finish React tutorial',
			completed: false
		},
		{
			id: uuidv4(),
			task: 'Call mom',
			completed: true
		},
		{
			id: uuidv4(),
			task: 'Buy groceries',
			completed: false
		},
		{
			id: uuidv4(),
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
		//copies previous state object and filters out every task that doesnt have the same id as deleted task
		setTasks((prevTasks) => {
			return prevTasks.filter((task) => task.id !== id);
		});
	};

	const addTodo = (text) => {
		console.log(`adding ${text}`);
		setTasks((prevTasks) => {
			return [...prevTasks, { id: uuidv4(), task: text, completed: false }];
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
			<Todoform addTodo={addTodo} />
		</List>
	);
}
