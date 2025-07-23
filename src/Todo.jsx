import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Todo({ task, handleDelete, handleToggle }) {
	const labelId = `checkbox-list-label-${task.id}`;

	return (
		<ListItem
			key={task.id}
			secondaryAction={
				<IconButton edge="end" aria-label="comments">
					<DeleteIcon onClick={handleDelete} />
				</IconButton>
			}
			sx={task.completed && { textDecoration: 'line-through' }}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={task.completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
						onChange={handleToggle}
					/>
				</ListItemIcon>
				<ListItemText id={task.id} primary={task.task} />
			</ListItemButton>
		</ListItem>
	);
}
