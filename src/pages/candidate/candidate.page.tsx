import { CandidateBanner } from '@/components/candidate-banner';
import { FC, Fragment } from 'react';
import { ExclusiveDifferences } from './components/exclusive-differences';
import { ReviewsBanner } from './components/reviews-banner';
import { SignInBanner } from './components/sign-in-banner';
import { SignInSection } from './components/sign-in-section';

export const Candidate: FC = () => {
	return (
		<Fragment>
			<CandidateBanner />
			<ExclusiveDifferences />
			<SignInSection />
			<SignInBanner />
			<ReviewsBanner />
		</Fragment>
	);
};
