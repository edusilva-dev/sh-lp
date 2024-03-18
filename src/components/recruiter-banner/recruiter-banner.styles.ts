import { Box, Typography, styled } from '@mui/material';

export const RecruiterBannerContainer = styled(Box)(({ theme }) => ({
	width: `calc(100% - (${theme.spacing(3)} * 2))`,

	margin: theme.spacing(3),
	padding: theme.spacing(3),

	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.typography.pxToRem(16),

	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
	},

	[theme.breakpoints.up('sm')]: {
		height: '648px',
		flexDirection: 'row',
		flexWrap: 'wrap',
	}
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up('sm')]: {
		width: '50%',
		padding: theme.spacing(6)
	}
}));

export const RecruiterBannerTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(24),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,

	[theme.breakpoints.up('sm')]: {
		fontSize: theme.typography.pxToRem(40),
		lineHeight: theme.typography.pxToRem(56),
	}
}));

export const RecruiterBannerSubtitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(3),

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightRegular,

	[theme.breakpoints.up('sm')]: {
		marginTop: theme.spacing(6),

		fontSize: theme.typography.pxToRem(24),
	}
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(3),

	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row-reverse',
		gap: theme.spacing(5),

		marginTop: theme.spacing(20),
	}
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	['& img']: {
		width: '100%',
		objectFit: 'contain',
	},

	[theme.breakpoints.down('sm')]: {
		marginTop: theme.spacing(6),
	},

	[theme.breakpoints.up('sm')]: {
		width: '50%',
		height: '100%',

		['& img']: {
			width: '100%',
			height: '600px',
			borderRadius: '16px',
			objectFit: 'contain',
		}
	},  
}));