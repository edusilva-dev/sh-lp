import { Box, Typography, styled } from '@mui/material';

export const ContentContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	padding: theme.spacing(3),

	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(24),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,

	[theme.breakpoints.up('sm')]: {
		marginTop: theme.spacing(7),

		fontSize: theme.typography.pxToRem(40),
		lineHeight: theme.typography.pxToRem(56),
	}
}));

export const CardsContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
	}
}));

export const SmallCardsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),

	[theme.breakpoints.up('sm')]: {
		width: '60%',
  
	}
}));