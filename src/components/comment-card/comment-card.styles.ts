import { Stack, styled } from '@mui/material';

export const CardContainer = styled(Stack)(({ theme }) => ({
	minWidth: 253,
	height: 352,

	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,

	[theme.breakpoints.up('sm')]: {
		minWidth: 426,
		height: 290,
	}
}));