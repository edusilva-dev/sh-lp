import { createTheme, tabClasses } from '@mui/material';

/**
 * This theme follows the mui doc theme, please, check the documentation.
 *
 * @Link https://mui.com/material-ui/customization/default-theme/
 */
export const theme = createTheme({
	spacing: 8,
	shape: {
		borderRadius: 8,
	},
	palette: {
		primary: {
			main: '#4402FF',
			light: '#B694FF',
		},
		secondary: {
			main: '#FFFFFF',
		},
		background: {
			paper: '#F3F5F7',
		},
		divider: '#6C8190',
	},
	typography: {
		fontFamily: '\'Ubuntu\', sans-serif',
		h1: {
			fontWeight: 500,
			fontSize: '2.5rem',
			lineHeight: '56px',
		},
		h2: {
			fontWeight: 500,
			fontSize: '1.5rem',
			lineHeight: '32px',
		},
		h3: {
			fontSize: '1.25rem',
			lineHeight: '32px',
		},
		body1: {
			fontSize: '1rem',
			lineHeight: '24px',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: ({ theme }) => ({
					minWidth: '200px',
					textTransform: 'initial',
					padding: '12px',
					borderRadius: theme.shape.borderRadius * 10,
				}),
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
