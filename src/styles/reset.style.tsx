import { GlobalStyles } from '@mui/material';

export const ResetCSS = () => <GlobalStyles styles={(theme) => ({
	body: {
		padding: 0,
		margin: 0,

		backgroundColor: theme.palette.background.default,

		fontFamily: theme.typography.fontFamily,

		boxSizing: 'border-box',
	},

	'*': {
		boxSizing: 'border-box',
	}
})} />;