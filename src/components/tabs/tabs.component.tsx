import { FC, useEffect, useState } from 'react';
import { TabsContainer } from './tabs.styles';
import { Tab } from '../tab';

export const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState<string>('recruiter');

	useEffect(() => {
		console.log(activeTab);
	}, [activeTab]);

	return (
		<TabsContainer>
			<Tab 
				label='Sou candidato' 
				isActive={activeTab === 'candidate'} 
				onClick={() => setActiveTab('candidate')} 
			/>
			<Tab 
				label='Sou recrutador'
				isActive={activeTab === 'recruiter'}
				onClick={() => setActiveTab('recruiter')} 
			/>
		</TabsContainer>
	);
};