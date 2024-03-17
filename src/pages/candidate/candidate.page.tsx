import { CandidateBanner } from '@/components/candidate-banner';
import { FC } from 'react';
import { ExclusiveDifferences } from './components/exclusive-differences';

export const Candidate: FC = () => {
	return (
		<>
			<CandidateBanner />
			<ExclusiveDifferences />
		</>
	);
};
