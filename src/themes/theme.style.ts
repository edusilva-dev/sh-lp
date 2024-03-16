import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeText {
		active: string
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
			main: '#4402FF'
		},
		secondary: {
			main: '#1E2E3A'
		},
		text: {
			active: '#4402FF'
		},
		background: {
			paper: '#F3F5F7'
		}
	},
	typography: {
		fontFamily: '\'Ubuntu\', sans-serif'
	}
});