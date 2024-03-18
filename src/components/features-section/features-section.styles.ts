import { styled } from '@mui/material';
import { Container } from '../container';

export const SectionContainer = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,

	position: 'relative',

	['& img.mobile']: {
		width: '135%',
	},

	['& img.desktop']: {
		top: 0,
		width: '50%',
		position: 'absolute',
		right: 0,
		zIndex: 1,
	},
}));
