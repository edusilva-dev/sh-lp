import { Stack, styled } from '@mui/material';

export const FeatureContainer = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		['& svg']: {
			width: 24,
			height: 24
		}
	}
}));