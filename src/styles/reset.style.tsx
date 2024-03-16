import { GlobalStyles } from '@mui/material';

export const ResetCSS = () => <GlobalStyles styles={() => ({
	padding: 0,
	margin: 0,
	boxSizing: 'border-box'
})} />;