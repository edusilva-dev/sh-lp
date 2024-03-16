import React from 'react';
import ReactDOM from 'react-dom/client';

import { theme } from './themes';
import { ThemeProvider } from '@mui/material';
import { ResetCSS } from './styles/reset.style.tsx';

import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
