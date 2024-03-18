import { TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Highlight } from './components/highlight';
import { Partners } from './components/partners';
import { Tabs } from './components/tabs';
import { Candidate } from './pages/candidate';
import { Recruiter } from './pages/recruiter';

export const App = () => {
	return (
		<Fragment>
			<Header />
			<Box component="main">
				<Highlight />
				<Tabs>
					<TabPanel value="candidate">
						<Candidate />
					</TabPanel>
					<TabPanel value="recruiter">
						<Recruiter />
					</TabPanel>
				</Tabs>
			</Box>
			<Partners />
			<Footer />
		</Fragment>
	);
};
