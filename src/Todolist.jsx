import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Todo from './Todo';
import Todoform from './Todoform';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';

export default function Todolist() {
	const getInitialTasks = () => {
		const data = JSON.parse(localStorage.getItem('tasks'));
		if (!data) return [];
		return data;
	};
	const [tasks, setTasks] = useState(getInitialTasks);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Typography variant="h2" gutterBottom>
				To Do List!
			</Typography>
			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
					border: '1px solid black'
				}}
			>
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
		</Box>
	);
}
