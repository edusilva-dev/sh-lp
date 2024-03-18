import { AppBar, Box, styled } from '@mui/material';

import { HEADER } from './header.constants';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
	width: '100%',
	height: HEADER.height.mobile,

	padding: '16px 24px',

	backgroundColor: 'transparent',
	borderBottom: `1px solid ${theme.palette.divider}`,

	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',

	[theme.breakpoints.up('sm')]: {
		height: HEADER.height.desktop,
		padding: '32px 24px',
		border: 'none'
	},
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
	display: 'none',

	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.typography.pxToRem(16),
	}
}));