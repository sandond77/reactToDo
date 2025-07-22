import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

export default function Todo({ task }) {
	console.log(task);
	const labelId = `checkbox-list-label-${task.id}`;

	return (
		<ListItem key={task.id} disablePadding>
			<ListItemButton
				role={undefined}
				// onClick={}
				dense
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={task.completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
					/>
				</ListItemIcon>
				<ListItemText id={task.id} primary={task.task} />
				<DeleteIcon />
			</ListItemButton>
		</ListItem>
	);
}
