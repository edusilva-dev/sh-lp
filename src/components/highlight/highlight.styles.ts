import { Box, Typography, styled } from '@mui/material';
import { HEADER } from '../header/header.constants';

export const Container = styled(Box)(({ theme }) => ({
	minHeight: 'calc(100vh - 72px)',

	backgroundColor: theme.palette.primary.main,

	display: 'flex',
	flexWrap: 'wrap',

	position: 'relative',
	overflow: 'hidden',

	[theme.breakpoints.down('sm')]: {
		padding: `calc(32px + ${HEADER.height.mobile}px) 24px`,

		backgroundImage: 'url(\'src/assets/images/mobile-shadow.png\')',
		backgroundPosition: 'top top',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},

	[theme.breakpoints.up('sm')]: {
		padding: `calc(32px + ${HEADER.height.desktop}px) 96px`,

		alignItems: 'center',
		justifyContent: 'space-between',

		backgroundImage: 'url(\'src/assets/images/highlight.png\')',
		backgroundPosition: '100% 50%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
	},
}));

export const TitlesContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},

	[theme.breakpoints.up('sm')]: {
		width: '60%',
	},
}));

export const HighlightTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.white,
	fontSize: theme.typography.pxToRem(40),
	lineHeight: theme.typography.pxToRem(56),
	fontWeight: theme.typography.fontWeightMedium,

	[theme.breakpoints.up('sm')]: {
		fontSize: theme.typography.pxToRem(56),
		lineHeight: theme.typography.pxToRem(80),
	},
}));

export const HighilightSubtitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(3),

	color: theme.palette.common.white,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightRegular,
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	display: 'flex',
	justifyContent: 'center',

	[theme.breakpoints.down('sm')]: {
		marginTop: '40px',

		['img.mobile']: {
			width: '100%',
			objectFit: 'cover',
		},

		['img.desktop']: {
			display: 'none',
		},
	},

	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));