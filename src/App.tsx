import { Header } from './components/header';
import { Highlight } from './components/highlight';
import { Tabs } from './components/tabs';
import { Recruiter } from './pages/recruiter';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Highlight />
				<Tabs />
				<Recruiter />
			</main>
		</>
	);
};
