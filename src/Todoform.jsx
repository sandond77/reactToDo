import {
	ListItem,
	TextField,
	Box,
	InputAdornment,
	IconButton
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

export default function Todoform({ addTodo }) {
	const [newTodo, setNewTodo] = useState('');
	const handleTextChange = (event) => {
		setNewTodo(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodo);
		setNewTodo('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<ListItem>
				<Box sx={{ width: 500, maxWidth: '100%' }}>
					<TextField
						fullWidth
						label="New Todo"
						id="fullWidth"
						onChange={handleTextChange}
						value={newTodo}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label={'Add Task'}
										edge="end"
										onClick={handleSubmit}
									>
										<CreateIcon />
									</IconButton>
								</InputAdornment>
							)
						}}
					></TextField>
				</Box>
			</ListItem>
		</form>
	);
}
