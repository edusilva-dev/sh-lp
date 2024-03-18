import { Box, styled } from '@mui/material';

export const ContentContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	padding: theme.spacing(3),

	backgroundColor: theme.palette.background.paper,

	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const PlansContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	gap: theme.spacing(4),
}));
