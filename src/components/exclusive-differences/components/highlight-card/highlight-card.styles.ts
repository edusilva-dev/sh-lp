import { Box, Button, Typography, styled } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	padding: theme.spacing(3),

	backgroundColor: theme.palette.background.paper,
	borderRadius: '16px',

	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
		gap: theme.spacing(4)
	}
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: 'fit-content',

	position: 'relative',

	['& img']: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
    
		borderRadius: '16px',
	},

	[theme.breakpoints.down('sm')]: {
		maxHeight: '240px',

		['& img']: {
			maxHeight: '240px',
		}
	},

	[theme.breakpoints.up('sm')]: {
		width: '402px',
		height: '100%',

		['& img']: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
      
			borderRadius: '16px',
		},
	},
}));

export const JobGenerateButton = styled(Button)(({ theme }) => ({
	width: '214px',
	height: '40px',

	backgroundColor: theme.palette.background.paper,
	borderRadius: '100px',

	textTransform: 'none',
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,

	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',

	[theme.breakpoints.up('sm')]: {
		width: '281px',
		height: '72px',

		fontSize: theme.typography.pxToRem(16),
		lineHeight: theme.typography.pxToRem(24),
	},
}));

export const CardContent = styled(Box)(({ theme }) => ({

	height: '100%',

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',

	[theme.breakpoints.up('sm')]: {
		width: '50%',
	}
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,

	[theme.breakpoints.down('sm')]: {
		marginTop: theme.spacing(6),
	}
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightRegular,

	[theme.breakpoints.down('sm')]: {
		marginTop: theme.spacing(1),
	}
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
	justifySelf: 'flex-end',
  
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(16),
	lineHeight: theme.typography.pxToRem(24),
	fontWeight: theme.typography.fontWeightRegular,

	[theme.breakpoints.down('sm')]: {
		marginTop: theme.spacing(1),
	}
}));