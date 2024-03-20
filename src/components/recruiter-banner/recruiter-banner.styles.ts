import { Button as BaseButton, styled, Stack } from '@mui/material';
import { RoundGradientButton } from '../round-gradient-button';

export const RecruiterBannerContainer = styled(Stack)(({ theme }) => ({
	width: `calc(100% - (${theme.spacing(3)} * 2))`,

	margin: theme.spacing(3),
	padding: theme.spacing(3),

	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.typography.pxToRem(16),

	flexDirection: 'column',
	gap: theme.spacing(6),

	['& img']: {
		width: '100%',
		height: '272px',
		borderRadius: theme.typography.pxToRem(16),
		objectFit: 'cover',
	},

	[theme.breakpoints.up('sm')]: {
		width: `calc(100% - (${theme.spacing(6)} * 2))`,

		margin: `${theme.spacing(4)} ${theme.spacing(6)}`,
	},

	[theme.breakpoints.up('md')]: {
		width: `calc(100% - (${theme.spacing(6)} * 2))`,
		height: '708px',

		margin: `${theme.spacing(4)} ${theme.spacing(6)}`,

		flexDirection: 'row',
		gap: theme.spacing(4),

		['& img']: {
			width: `calc(50% - ${theme.spacing(2)})`,
			height: 'unset',
		},
	}
}));

export const ContentContainer = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		width: `calc(50% - ${theme.spacing(2)})`,
		padding: theme.spacing(6),

		justifyContent: 'space-between',
	}
}));

export const ButtonsContainer = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(2),

	[theme.breakpoints.up('lg')]: {
		flexDirection: 'row-reverse',
		gap: theme.spacing(5),
	},
}));

export const Button = styled(BaseButton)(({ theme }) => ({
	width: '100%',

	[theme.breakpoints.up('lg')]: {
		width: '50%',
	} 
}));