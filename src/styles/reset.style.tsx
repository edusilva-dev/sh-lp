import { GlobalStyles } from '@mui/material';

export const ResetCSS = () => <GlobalStyles styles={(theme) => ({
	body: {
		padding: 0,
		margin: 0,
		maxWidth: '100vw!important',

		backgroundColor: theme.palette.background.default,

		fontFamily: theme.typography.fontFamily,

		boxSizing: 'border-box',
	},

	main: {
		maxWidth: '100vw!important',
		overflowX: 'hidden',
	},

	'*': {
		boxSizing: 'border-box',
	}
})} />;