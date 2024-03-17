import { createTheme, tabClasses } from '@mui/material';

declare module '@mui/material/styles' {
	interface TypeText {
		active: string;
	}
}

/**
 * This theme follows the mui doc theme, please, check the documentation.
 *
 * @Link https://mui.com/material-ui/customization/default-theme/
 */
export const theme = createTheme({
	palette: {
		primary: {
			main: '#4402FF',
		},
		secondary: {
			main: '#B694FF',
		},
		text: {
			active: '#4402FF',
		},
		background: {
			paper: '#F3F5F7',
		},
		divider: '#6C8190',
	},
	typography: {
		fontFamily: "'Ubuntu', sans-serif",
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
		},
		// @ts-expect-error @mui/lab MuiTabPanel styleOverrides
		MuiTabPanel: {
			styleOverrides: {
				root: {
					padding: 0,
				},
			},
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'initial',
					height: '72px',
					backgroundColor: '#F3F5F7',
					[`&.${tabClasses.selected}`]: {
						backgroundColor: '#FFFFFF',
					},
				},
			},
		},
	},
});
