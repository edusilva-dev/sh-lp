import { Box, Typography, styled } from '@mui/material';
import { FaClipboardList } from 'react-icons/fa';

export const CardContainer = styled(Box)(({ theme }) => ({
	width: '100%',

	padding: theme.spacing(3),

	backgroundColor: theme.palette.background.paper,
	borderRadius: '16px',

	display: 'flex',
	flexDirection: 'column',
}));

export const IconContainer = styled(Box)(({ theme }) => ({
	width: '56px',
	height: '56px',

	backgroundColor: theme.palette.common.white,
	borderRadius: '16px',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));

export const Icon = styled(FaClipboardList)(({ theme }) => ({
	color: theme.palette.primary.main
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(6),

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(1),

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(16),
	lineHeight: theme.typography.pxToRem(24),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(16),
	lineHeight: theme.typography.pxToRem(24),
	fontWeight: theme.typography.fontWeightRegular,
}));