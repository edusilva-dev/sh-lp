import { Typography, styled } from '@mui/material';

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