import { CandidateBanner } from '@/components/candidate-banner';
import { FC } from 'react';
import { ExclusiveDifferences } from './components/exclusive-differences';
import { SignInSection } from './components/sign-in-section';

export const Candidate: FC = () => {
	return (
		<>
			<CandidateBanner />
			<ExclusiveDifferences />
			<SignInSection />
		</>
	);
};
