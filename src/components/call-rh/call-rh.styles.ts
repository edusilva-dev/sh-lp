import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
	width: '100%', 

	display: 'flex', 
	flexDirection: 'column',
	alignItems: 'center', 
	gap: theme.spacing(4),

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
}));

export const Text = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(16),
	lineHeight: theme.typography.pxToRem(24),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
	display: 'flex', 
	flexDirection: 'column',
	alignItems: 'center', 
	gap: theme.spacing(2),

	['& button']: {
		width: '100%',
	},

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row-reverse',
		gap: theme.spacing(3),

		['& button']: {
			width: '198px',
			flexDirection: 'row',
			justifyContent: 'space-between'
		}
	},
}));