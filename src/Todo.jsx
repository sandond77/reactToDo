import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function Todo() {
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

	const [checked, setChecked] = useState(0);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{initialTasks.map((task) => {
				return (
					<ListItem key={task.id} disablePadding>
						<ListItemButton
						// role={undefined}
						// onClick={handleToggle(value)}
						// dense
						>
							<ListItemIcon>
								<Checkbox
								// edge="start"
								// checked={checked.includes(value)}
								// tabIndex={-1}
								// disableRipple
								// inputProps={{ 'aria-labelledby': labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={task.id} primary={task.task} />
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
}
