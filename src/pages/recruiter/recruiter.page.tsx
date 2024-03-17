import { FeaturesSection } from '@/components/features-section';
import { Plans } from '@/components/plans';
import { ReviewSection } from '@/components/review-section';
import { RecruiterBanner } from '@components/recruiter-banner';
import { FC } from 'react';
import { ExclusiveDifferences } from './components/exclusive-differences';
import { FullImageBanner } from './components/full-image-banner';
import { SideBanner } from './components/side-banner';
import { SignInSection } from './components/sign-in-section';

export const Recruiter: FC = () => {
	return (
		<>
			<RecruiterBanner />
			<ExclusiveDifferences />
			<SignInSection />
			<Plans />
			<FullImageBanner />
			<FeaturesSection />
			<ReviewSection />
			<SideBanner />
		</>
	);
};
