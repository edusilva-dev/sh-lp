import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

export const Tabs: FC<PropsWithChildren> = ({ children }) => {
	const [activeTab, setActiveTab] = useState<string>('candidate');

	return (
		<TabContext value={activeTab}>
			<TabList onChange={(_, value) => setActiveTab(value)} variant="fullWidth">
				<Tab label="Sou candidato" value="candidate" />
				<Tab label="Sou recrutador" value="recruiter" />
			</TabList>
			{children}
		</TabContext>
	);
};
