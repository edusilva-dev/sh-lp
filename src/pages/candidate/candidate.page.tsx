import { CandidateBanner } from '@/components/candidate-banner';
import { ExclusiveDifferences } from '@/components/exclusive-differences-candidate';
import { FC } from 'react';

export const Candidate: FC = () => {
	return (
		<>
			<CandidateBanner />
			<ExclusiveDifferences />
		</>
	);
};
