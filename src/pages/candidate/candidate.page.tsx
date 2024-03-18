import { FC } from 'react';
import { CandidateBanner } from './components/candidate-banner';
import { ExclusiveDifferences } from './components/exclusive-differences';
import { ReviewsBanner } from './components/reviews-banner';
import { SignInBanner } from './components/sign-in-banner';
import { SignInSection } from './components/sign-in-section';

export const Candidate: FC = () => {
	return (
		<>
			<CandidateBanner />
			<ExclusiveDifferences />
			<SignInSection />
			<SignInBanner />
			<ReviewsBanner />
		</>
	);
};
