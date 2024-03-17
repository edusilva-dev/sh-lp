import { AppBar, Box, Button, styled } from '@mui/material';
import { HiMenuAlt1 } from 'react-icons/hi';

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

export const MenuIcon = styled(HiMenuAlt1)(({ theme }) => ({
	color: theme.palette.common.white,

	[theme.breakpoints.up('sm')]: {
		display: 'none',
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

const BaseButton = styled(Button)(({ theme }) => ({
	width: 160,
	height: 42,

	borderRadius: 100,

	fontSize: theme.typography.fontSize,
	textTransform: 'none',

	['&:hover']: {
		color: 'inherit',
		backgroundColor: theme.palette.secondary.main
	}
}));

export const RegisterButton = styled(BaseButton)(({ theme }) => ({
	color: theme.palette.common.white,
	fontSize: theme.typography.fontSize,
	borderWidth: 2,
}));

export const LoginButton = styled(BaseButton)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.fontSize,
	backgroundColor: theme.palette.common.white,
}));