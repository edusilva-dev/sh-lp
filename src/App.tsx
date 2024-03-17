import { TabPanel } from '@mui/lab';
import { Header } from './components/header';
import { Highlight } from './components/highlight';
import { Tabs } from './components/tabs';
import { Candidate } from './pages/candidate';
import { Recruiter } from './pages/recruiter';
import { Footer } from './components/footer';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Highlight />
				<Tabs>
					<TabPanel value="candidate">
						<Candidate />
					</TabPanel>
					<TabPanel value="recruiter">
						<Recruiter />
					</TabPanel>
				</Tabs>
			</main>
			<Footer />
		</>
	);
};
