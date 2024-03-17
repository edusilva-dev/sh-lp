import { Box, Button, Typography, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),

	position: 'relative',

	['& img']: {
		width: '100%',
	},

	['& .desktop']: {
		display: 'none',
	},

	[theme.breakpoints.up('sm')]: {
		['& .mobile']: {
			display: 'none',
		},

		['& .desktop']: {
			display: 'block',
		}
	}
}));

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const ContainedButton = styled(Button)(({ theme }) => ({
	width: '100%',
	height: '42px',
  
	borderRadius: '80px',

	textTransform: 'none',
	// color: theme.palette.common.white,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,
	borderWidth: 2
}));