import { Box, styled, typographyClasses } from '@mui/material';

export const CandidateBannerContainer = styled(Box)(({ theme }) => ({
	backgroundColor: '#B694FF',
	padding: '24px',
	[theme.breakpoints.up('sm')]: {
		padding: '48px',
	},
	[`.${typographyClasses.root}`]: {
		color: theme.palette.common.white,
	},
}));
