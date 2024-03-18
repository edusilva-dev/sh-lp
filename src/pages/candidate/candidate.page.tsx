import { CandidateBanner } from '@/pages/candidate/components/candidate-banner';
import { ExclusiveDifferences } from '@/pages/candidate/components/exclusive-differences';
import { ReviewsBanner } from '@/pages/candidate/components/reviews-banner';
import { SignInBanner } from '@/pages/candidate/components/sign-in-banner';
import { SignInSection } from '@/pages/candidate/components/sign-in-section';
import { FC, Fragment } from 'react';

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
