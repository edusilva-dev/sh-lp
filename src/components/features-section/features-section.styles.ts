import { styled } from '@mui/material';
import { Container } from '../container';

export const SectionContainer = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main, 

	position: 'relative',

	['& img.mobile']: {
		maxWidth: '100%',
		display: 'none',

		marginLeft: theme.spacing(-6),
	},

	['& img.desktop']: {
		position: 'absolute',
		right: 0,
		top: theme.spacing(8),
		zIndex: 1
	},

	[theme.breakpoints.down('md')]: {
		['& img.desktop']: {
			display: 'none',
		},

		['& img.mobile']: {
			display: 'block',
			marginTop: theme.spacing(6),
		}
	},

	[theme.breakpoints.down('sm')]: {
		['& img.mobile']: {
			marginLeft: theme.spacing(-3),
		}
	}

}));