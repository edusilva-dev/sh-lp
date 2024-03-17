import { Button as BaseButton, styled } from '@mui/material';

type ButtonProps = {
  $isActive: boolean
}

export const Button = styled(BaseButton)<ButtonProps>(({ theme, $isActive }) => ({
	width: '100%',

	borderRadius: 0,
	borderBottom: '4px solid transparent',

	color: $isActive ? theme.palette.primary.main : theme.palette.common.black,
	borderColor: $isActive ? theme.palette.primary.main : 'transparent',
}));