import { styled } from '@mui/material';
import { Container } from '../container';

export const SectionContainer = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,

	position: 'relative',

	['& img.mobile']: {
		width: '135%',

		marginLeft: '-35vw',
	},

	['& img.desktop']: {
		width: '50%',
		maxWidth: '600px',
		position: 'absolute',
		right: 0,
		top: theme.spacing(8),
		zIndex: 1,
	},
}));
